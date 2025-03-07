import React from "react";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description:
    "Bedge Pictures is a team of photographers who push the boundaries by changing the way Nigerian weddings have traditionally been photographed. By doing so, we create images that stand out in today’s highly competitive wedding market.",
};

export default function NotFound() {
  return (
    <div className=" flex h-[100dvh] justify-center items-center">
      <div className="text-center">
        <p className="text-base font-semibold font-poppins text-black-600">
          404
        </p>
        <h1 className="mt-4 text-5xl font-cormorant font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-poppins font-medium text-gray-500 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-700  dark:text-black dark:bg-white dark:hover:scale-110"
          >
            Back Home
          </Link>
          <Link
            href="/contact"
            className="text-base font-semibold text-gray-900 hover:scale-110  dark:text-white"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
