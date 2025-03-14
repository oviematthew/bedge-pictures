import Image from "next/image";
import React from "react";
import Accordion from "../components/Accordion";

export const metadata = {
  title: "FAQs - Bedge Pictures",
  description:
    "We do what we do because we believe there is no greater happiness than love. Now, who wouldn’t want to spend their life telling love stories?!",
};

export default function Faqs() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <h2 className="text-6xl font-cormorant font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
          FAQs
        </h2>
      </div>
      <div className="mx-auto bg-white dark:bg-black mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      <Accordion />
    </>
  );
}
