import React from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">hello home</div>
      <Footer />
    </>
  );
}
