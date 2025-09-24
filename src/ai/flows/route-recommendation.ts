'use server';

/**
 * @fileOverview Recommends optimal routes for carpooling based on destination, traffic, and co-passengers' routes.
 *
 * - recommendRoute - A function that provides route recommendations.
 * - RouteRecommendationInput - The input type for the recommendRoute function.
 * - RouteRecommendationOutput - The return type for the recommendRoute function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteRecommendationInputSchema = z.object({
  destination: z.string().describe('The destination of the ride.'),
  currentTraffic: z.string().describe('Current traffic conditions.'),
  coPassengersRoutes: z.string().describe('The routes of the co-passengers.'),
  userPreferences: z.string().optional().describe('Optional user preferences for routing.'),
});

export type RouteRecommendationInput = z.infer<typeof RouteRecommendationInputSchema>;

const RouteRecommendationOutputSchema = z.object({
  optimalRoute: z.string().describe('The recommended optimal route.'),
  estimatedArrivalTime: z.string().describe('The estimated time of arrival.'),
  routeDescription: z.string().describe('A detailed description of the route.'),
});

export type RouteRecommendationOutput = z.infer<typeof RouteRecommendationOutputSchema>;

export async function recommendRoute(input: RouteRecommendationInput): Promise<RouteRecommendationOutput> {
  return recommendRouteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeRecommendationPrompt',
  input: {schema: RouteRecommendationInputSchema},
  output: {schema: RouteRecommendationOutputSchema},
  prompt: `You are an AI route planner designed to provide optimal route suggestions for carpooling.

  Based on the destination, current traffic conditions, co-passengers' routes, and user preferences, suggest the best route.

  Destination: {{{destination}}}
Current Traffic: {{{currentTraffic}}}
Co-Passengers' Routes: {{{coPassengersRoutes}}}
User Preferences: {{{userPreferences}}}

  Provide a detailed route description, estimated time of arrival, and the optimal route.
`,
});

const recommendRouteFlow = ai.defineFlow(
  {
    name: 'recommendRouteFlow',
    inputSchema: RouteRecommendationInputSchema,
    outputSchema: RouteRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
