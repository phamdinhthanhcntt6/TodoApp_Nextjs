import Logo from "@/components/global/logo";
import LoginForm from "@/components/login/login-form";
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
  title: "Login",
};

const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm max-md:p-2">
      <CardHeader className="space-y-1">
        <Logo />
        <CardTitle className="text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter className="flex justify-center items-center text-center">
        <div className="text-sm">
          Don&apos;t have an account?&nbsp;
          <Link className="font-bold" href="/register">
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
