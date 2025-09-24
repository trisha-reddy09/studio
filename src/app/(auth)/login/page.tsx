import { LoginForm } from "@/components/auth/login-form";
import { Logo } from "@/components/icons/logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Logo className="h-12 w-auto" />
      <Card className="w-full">
        <CardHeader>
          <h1 className="text-2xl font-headline font-bold text-center">Welcome to WAYN</h1>
          <p className="text-muted-foreground text-center">We Are Your Neighbours</p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
