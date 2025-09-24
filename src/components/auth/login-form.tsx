'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { communities } from "@/lib/constants";
import { Car } from "lucide-react";

const formSchema = z.object({
  community: z.string().min(1, { message: "Please select a community." }),
  idCode: z.string().min(1, { message: "Please enter your ID code." }),
});

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      community: "",
      idCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate login
    console.log(values);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="community"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Community</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your community..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {communities.map((community) => (
                    <SelectItem key={community.id} value={community.id}>
                      {community.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="idCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University/Employee ID</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 123456 or EMP789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          <Car className="mr-2 h-4 w-4" />
          Login & Find Ride
        </Button>
      </form>
    </Form>
  );
}
