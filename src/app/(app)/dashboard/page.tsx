import { RideAlertCard } from "@/components/dashboard/ride-alert-card";
import { rideAlerts } from "@/lib/constants";
import { Bell } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold font-headline">Available Rides</h1>
        <p className="text-muted-foreground">Join a ride with your community members.</p>
      </div>

      <div className="space-y-4">
        {rideAlerts.map((alert) => (
          <RideAlertCard key={alert.id} {...alert} />
        ))}
      </div>
    </div>
  );
}
