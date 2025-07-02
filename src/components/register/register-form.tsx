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
import { RegisterBody, RegisterBodyType } from "@/schema/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { sendOTP } from "@/service/user";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import useAuthStore from "../../zustand/useAuthStore";

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setEmail } = useAuthStore();

  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: RegisterBodyType) => {
    try {
      setIsLoading(true);
      const res = await sendOTP(values.email);
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
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
