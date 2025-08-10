import React from "react";

import Photo1 from "../../../assets/Home/DocumentationSection/1.jpg";
import Photo2 from "../../../assets/Home/DocumentationSection/2.jpg";
import Photo3 from "../../../assets/Home/DocumentationSection/3.jpg";
import Photo4 from "../../../assets/Home/DocumentationSection/4.jpg";
import Photo5 from "../../../assets/Home/DocumentationSection/5.jpg";
import Photo6 from "../../../assets/Home/DocumentationSection/6.jpg";

function DocumentationSection() {
  const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];
  return (
    <div className="h-screen flex items-center ">
      <div className="flex flex-col pl-33 pr-17">
        <h4 className="text-[#A4161A] font-semibold text-xl pl-2">Work</h4>
        <h2 className="font-semibold text-[5.4rem] w-70 wrap-anywhere text-balance leading-26 tracking-wide">
          DOKUMEN TASI
        </h2>
      </div>
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-3 pr-3">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            className="rounded-lg w-full aspect-[1/1] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default DocumentationSection;
