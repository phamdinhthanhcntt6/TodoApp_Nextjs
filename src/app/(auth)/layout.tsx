import Link from "next/link";
import React, { Suspense } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      lang="en"
      suppressHydrationWarning
      className="p-4 flex flex-col h-screen"
    >
      <Link
        href={"/"}
        className="flex text-xl font-bold text-black dark:text-white w-full cursor-pointer"
      >
        Todo
        <span className="font-bold text-gray-500 dark:text-gray-400">
          &nbsp;App
        </span>
      </Link>
      <div className="flex flex-col items-center justify-center p-4 my-auto">
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </div>
    </div>
  );
};

export default AuthLayout;
