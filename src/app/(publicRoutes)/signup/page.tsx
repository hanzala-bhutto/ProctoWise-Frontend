import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export default function () {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container flex flex-col justify-center shadow-xl items-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Sign Up as
        </h5>
        <Link
          href="/organizer/signup"
          className={`mb-3 ${buttonVariants({
            size: "lg",
          })}`}
        >
          Organizer
        </Link>
        <Link
          href="/participant/signup"
          className={`mb-3 ${buttonVariants({
            size: "lg",
            variant: "outline",
          })}`}
        >
          Participant
        </Link>
        <Link
          href="/judge/signup"
          className={`mb-3 ${buttonVariants({
            size: "lg",
          })}`}
        >
          Judge
        </Link>
      </div>
    </div>
  );
}
