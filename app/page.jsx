import React from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">hello home</div>
      <Image src="/favicon.ico" width={500} height={200} />
      <Footer />
    </>
  );
}
