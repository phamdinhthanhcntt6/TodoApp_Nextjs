import Logo from "@/components/global/logo";
import RegisterForm from "@/components/register/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Register",
};

const RegisterPage = () => {
  return (
    <Card className="w-full max-w-sm max-md:p-2">
      <CardHeader className="space-y-1">
        <Logo />
        <CardTitle className="text-center">Register</CardTitle>
        <CardDescription className="text-center">
          Create an account to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex justify-center items-center text-center">
        <div className="text-sm">
          Do you have an account?&nbsp;
          <Link className="font-bold" href="/login">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterPage;
