import Image from 'next/image';
import { ShieldAlert } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Logo } from '../icons/logo';
import { user } from '@/lib/constants';

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-4">
      <Logo className="h-8 w-auto" />
      <div className="flex items-center gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm" className="bg-accent hover:bg-accent/90">
              <ShieldAlert className="h-5 w-5" />
              <span className="ml-2 font-bold">SOS</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm SOS?</AlertDialogTitle>
              <AlertDialogDescription>
                This will immediately alert your emergency contacts and the nearest police station with your current location. Are you sure you want to proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Confirm & Alert</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Image
          src={user.avatarUrl}
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
          data-ai-hint="person portrait"
        />
      </div>
    </header>
  );
}
