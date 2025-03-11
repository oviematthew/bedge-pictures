import React from "react";
import Image from "next/image";
import MasonryGallery from "../../components/MasonryGallery";

export default function Wedding() {
  return (
    <>
      <div className="px-10 md:px-5 md:w-1/2 mx-auto mt-10">
        <MasonryGallery folderPath="portfolio/wedding" />
        <div className="hero">hello wedding</div>
      </div>
    </>
  );
}
