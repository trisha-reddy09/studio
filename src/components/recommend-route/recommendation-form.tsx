'use client';

import { recommendRoute, type RouteRecommendationOutput } from "@/ai/flows/route-recommendation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Route } from "lucide-react";

const formSchema = z.object({
  destination: z.string().min(1, { message: "Destination is required." }),
  currentTraffic: z.string().min(1, { message: "Traffic info is required." }),
  coPassengersRoutes: z.string().min(1, { message: "Co-passenger routes are required." }),
  userPreferences: z.string().optional(),
});

export function RecommendationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RouteRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      currentTraffic: "Moderate",
      coPassengersRoutes: "Passenger A: Hostel B, Passenger B: Gym",
      userPreferences: "Avoid highways if possible",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await recommendRoute(values);
      setResult(response);
    } catch (e) {
      setError("Failed to get recommendation. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Final Destination</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., University Main Gate" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentTraffic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Traffic</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Light, Moderate, Heavy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coPassengersRoutes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Co-passengers' Routes</FormLabel>
                <FormControl>
                  <Textarea placeholder="List passenger drop-off points" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferences (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Prefer scenic route" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Route className="mr-2 h-4 w-4" />
            )}
            Get Recommendation
          </Button>
        </form>
      </Form>

      {error && <p className="text-destructive text-center">{error}</p>}
      
      {result && (
        <Card className="mt-6 animate-in fade-in">
          <CardHeader>
            <CardTitle>Recommended Route</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Optimal Route:</h3>
              <p>{result.optimalRoute}</p>
            </div>
            <div>
              <h3 className="font-semibold">Estimated Arrival Time:</h3>
              <p>{result.estimatedArrivalTime}</p>
            </div>
            <div>
              <h3 className="font-semibold">Route Description:</h3>
              <p className="text-sm text-muted-foreground">{result.routeDescription}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
