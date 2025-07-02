"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { sendOTP, verifyOTP } from "@/service/user";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useAuthStore from "../../zustand/useAuthStore";

const VerifyCodeForm = () => {
  const [timeOut, setTimeOut] = useState<number>(60);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [code, setcode] = useState<string>("");

  const { email } = useAuthStore();

  const router = useRouter();

  const verifyCode = async () => {
    try {
      if (!code) return;
      setIsLoading(true);
      const res = await verifyOTP(email, code);
      toast.success(res.data.message);
      router.push("/register-user");
    } catch (error) {
      toast.error("Invalid code or expired");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const resendCode = async (email: string) => {
    try {
      setTimeOut(60);
      setIsLoading(true);
      await sendOTP(email);
      toast.success("Code sent successfully");
    } catch (error) {
      toast.error("Failed to send code");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (timeOut > 0) {
      setTimeout(() => {
        setTimeOut(timeOut - 1);
      }, 1000);
    }
  }, [timeOut]);

  return (
    <div className="flex items-center justify-center flex-col gap-y-6">
      <InputOTP
        maxLength={6}
        onChange={(val) => {
          setcode(val);
        }}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full" disabled={isLoading} onClick={verifyCode}>
        {isLoading ? (
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        Verify
      </Button>
      <div className="flex flex-row gap-x-4 items-center">
        <div className="ml-4 text-sm">{timeOut} second(s) left</div>
        <Button
          className="p-0"
          variant={"ghost"}
          disabled={timeOut > 0}
          onClick={() => {
            resendCode(email);
          }}
        >
          Resend
        </Button>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
