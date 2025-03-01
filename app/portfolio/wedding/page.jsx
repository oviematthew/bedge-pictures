import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Wedding() {
  return (
    <>
      <div className="hero">hello wedding</div>
      <Image src="/favicon.ico" width={500} height={200} />
      <Footer />
    </>
  );
}
