import React from "react";
import checkGreen from "../../../assets/Service/Logo/checkGreen.svg";

function DescriptionSection({
  image,
  title,
  description,
  layanan,
  bottomIcon,
  bottomInfo,
  className,
}) {
  return (
    <div className={`flex h-[65svh] py-2.5 px-8 mb-14 ${className}`}>
      <div className="flex-1 h-full">
        <img src={image} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="flex-1">
        <h2 className="text-center font-semibold text-[2.8rem] leading-[calc(2/2.8)] pt-3 pb-5">
          {title}
        </h2>
        <div className="font-poppins ml-3">
          <p>{description}</p>
          <div className="mt-6">
            Termasuk layanan:
            {layanan.map((value, index) => (
              <p className="flex" key={index}>
                <img src={checkGreen} alt="" className="pr-2 size-6" />
                {value}
              </p>
            ))}
          </div>
          <p className="flex mt-5 text-sm">
            <img src={bottomIcon} alt="" className="pr-2 size-7" />
            {bottomInfo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
