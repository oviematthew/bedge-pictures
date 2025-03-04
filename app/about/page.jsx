import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About - Bedge Pictures",
  description:
    "We do what we do because we believe there is no greater happiness than love. Now, who wouldn’t want to spend their life telling love stories?!",
};

export default function About() {
  return (
    <>
      <h1 className="text-lg">About Page</h1>
    </>
  );
}
