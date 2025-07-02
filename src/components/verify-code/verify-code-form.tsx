"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { verifyOTP } from "@/service/user";
import useAuthStore from "../../zustand/useAuthStore";
import { toast } from "sonner";

const VerifyCodeForm = () => {
  const [timeOut, setTimeOut] = useState<number>(60);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [code, setcode] = useState<string>("");

  const { email } = useAuthStore();

  const verifyCode = async () => {
    try {
      setIsLoading(true);
      const res = await verifyOTP(email, code);
      toast.success(res.data.message);
    } catch (error) {
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
            setTimeOut(60);
          }}
        >
          Resend
        </Button>
      </div>
    </div>
  );
};

export default VerifyCodeForm;
