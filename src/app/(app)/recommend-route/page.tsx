import { RecommendationForm } from "@/components/recommend-route/recommendation-form";
import { Compass } from "lucide-react";

export default function RecommendRoutePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold font-headline">AI Route Recommendation</h1>
        <p className="text-muted-foreground">
          Let our AI find the best route for your carpool based on traffic, passengers, and your preferences.
        </p>
      </div>
      <RecommendationForm />
    </div>
  );
}
