import React from "react";

import Photo1 from "../../../assets/Home/DocumentationSection/1.webp";
import Photo2 from "../../../assets/Home/DocumentationSection/2.webp";
import Photo3 from "../../../assets/Home/DocumentationSection/3.webp";
import Photo4 from "../../../assets/Home/DocumentationSection/4.webp";
import Photo5 from "../../../assets/Home/DocumentationSection/5.webp";
import Photo6 from "../../../assets/Home/DocumentationSection/6.webp";

function DocumentationSection() {
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo6, Photo6, Photo6,];
  return (
    <div className="min-h-svh flex flex-col md:flex-row items-center py-10 lg:py-3">
      <div className="flex flex-col justify-center md:justify-start h-45 sm:h-60 md:h-fit w-full items-center md:w-fit md:items-start pr-0 md:pl-11 md:pr-2 lg:pl-33 lg:pr-17">
        <h4 className="text-[#A4161A] font-semibold text-xl pl-2">Work</h4>
        <h2 className="font-semibold text-[2.6rem] text-center md:text-start pb-10 md:pb-0 sm:text-[4rem] md:text-[5rem] lg:text-[5.4rem] md:w-70 wrap-anywhere text-balance sm:leading-24 lg:leading-26 tracking-wide">
          DOKUMEN<br className="hidden md:block" />TASI
        </h2>
      </div>
      <div className="flex-1 grid grid-cols-3 lg:grid-rows-2 grid-rows-3 h-fit md:h-140 gap-3 px-3 sm:px-8 md:pr-3">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            className={`rounded-lg w-full h-full aspect-square md:aspect-auto lg:aspect-square object-cover ${
        index >= 6 ? "lg:hidden" : ""
      }`}
          />
        ))}
      </div>
    </div>
  );
}

export default DocumentationSection;
