import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, ArrowRight, User, Users } from "lucide-react";
import Link from "next/link";

type RideAlertCardProps = {
  id: string;
  from: string;
  to: string;
  seatsLeft: number;
  departureTime: string;
  driver: string;
};

export function RideAlertCard({ id, from, to, seatsLeft, departureTime, driver }: RideAlertCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium">
                <span>{from}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground"/>
                <span>{to}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                <Users className="h-4 w-4" />
                <span>{seatsLeft} Seats Left</span>
            </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
                <p className="text-muted-foreground">Departs at</p>
                <p className="font-medium">{departureTime}</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
                <p className="text-muted-foreground">Driver</p>
                <p className="font-medium">{driver}</p>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href={`/ride/${id}`}>
            <Car className="mr-2 h-4 w-4" />
            Join Ride
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
