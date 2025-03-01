import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Engagement() {
  return (
    <>
      <div className="hero">hello engagement</div>
      <Image src="/favicon.ico" width={500} height={200} />
      <Footer />
    </>
  );
}
