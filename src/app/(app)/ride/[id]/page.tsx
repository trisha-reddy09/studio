import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { rideDetails } from "@/lib/constants";
import { Clock, Car, User, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function RidePage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch ride details using params.id
  const ride = rideDetails;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-lg font-medium font-headline">
        <span>{ride.from}</span>
        <ArrowRight className="h-5 w-5 text-muted-foreground"/>
        <span>{ride.to}</span>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
        <Image
            src="https://picsum.photos/seed/map1/800/600"
            alt="Map showing route"
            fill
            className="object-cover"
            data-ai-hint="map route"
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Trip Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Estimated Arrival</span>
            <div className="flex items-center gap-2 font-medium">
              <Clock className="h-4 w-4" />
              <span>{ride.eta}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Image 
              src={ride.driver.avatarUrl}
              alt="Driver avatar"
              width={40}
              height={40}
              className="rounded-full mr-3"
              data-ai-hint="person driving"
            />
            <div className="flex-1">
              <p className="font-medium flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /> {ride.driver.name}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2"><Car className="h-4 w-4 text-muted-foreground" /> {ride.driver.car}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
