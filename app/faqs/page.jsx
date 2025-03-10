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
      <Breadcrumb />
      <h1 className="text-lg">FAQs Page</h1>
      <Accordion />
    </>
  );
}
