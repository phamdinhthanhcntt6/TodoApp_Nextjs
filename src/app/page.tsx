import { imageHome } from "@/assets/image";
import ModeToggle from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Todo App",
};

export default function HomePage() {
  return (
    <div className="flex mx-auto p-4 flex-col gap-y-4 h-screen">
      <div className="flex flex-row w-full justify-between">
        <div className="flex text-xl font-bold text-black dark:text-white w-full cursor-pointer items-start">
          Todo
          <span className="font-bold text-gray-500 dark:text-gray-400">
            &nbsp;App
          </span>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <ModeToggle />
          <Link href={"/register"}>
            <Button variant={"ghost"}>Register</Button>
          </Link>
          <Link href={"/login"}>
            <Button>Log in</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 h-full w-full">
        <div className="flex flex-col justify-center gap-y-4 col-span-1 mx-auto">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Welcome to Todo App
          </h1>
          <p className="text-base font-semibold text-black dark:text-white">
            A simple todo app to help you manage your tasks.
          </p>
          <Link href={"/register"}>
            <Button className="w-full rounded-full">Get Started</Button>
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4 col-span-1 items-center">
          <Image
            alt="image-home"
            src={imageHome}
            className="w-3/5 rounded-sm border dark:border-white"
          />
        </div>
      </div>
    </div>
  );
}
