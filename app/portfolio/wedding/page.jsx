import React from "react";
import Image from "next/image";
import MasonryGallery from "../../components/MasonryGallery";

export default function Wedding() {
  return (
    <>
      <div className="w-full md:w-3/4 mx-auto mt-10">
        <MasonryGallery folderPath="portfolio/wedding" />
      </div>
    </>
  );
}
