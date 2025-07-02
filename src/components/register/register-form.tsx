/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendCodeBody, SendCodeBodyType } from "@/schema/user.schema";
import { sendOTP } from "@/service/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useAuthStore from "../../zustand/useAuthStore";

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setEmail } = useAuthStore();

  const form = useForm<SendCodeBodyType>({
    resolver: zodResolver(SendCodeBody),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: SendCodeBodyType) => {
    try {
      setIsLoading(true);
      const res = await sendOTP(values.email);
      if (res.data.status === 400) {
        toast.error("Email already exists. Please login again.");
        return;
      }
      setEmail(values.email);
      toast.success(res.data.message);
      setIsLoading(false);
      router.push("/verify-code");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-6">
          <FormField
            control={form.control}
            name="email"
            rules={{ required: true, validate: (value) => value.includes("@") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Send Code
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
