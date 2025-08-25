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
    <section className={`flex flex-col md:flex-row py-2.5 px-5 md:px-6 lg:px-8 mb-14 ${className}`}>
        <h2 className="text-center font-semibold text-[2.3rem] sm:text-[2.4rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3.4rem] lg:leading-[calc(2/2.8)] pt-3 pb-5 block md:hidden">
          {title}
        </h2>
      <div className="flex-1 flex justify-center w-full h-96 sm:px-11 md:px-0 py-3 sm:py-6 md:py-0 self-center">
        <img src={image} alt="" className="object-cover w-full items-center sm:w-100 md:w-full h-full" />
      </div>
      <div className="flex-1 sm:px-9 md:px-0">
        <h2 className="text-center font-semibold text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] xl:text-[3.4rem] lg:leading-[calc(2/2.8)] pt-3 pb-5 hidden md:block">
          {title}
        </h2>
        <div className="font-poppins ml-3 text-[0.86rem] md:text-[0.9re m] lg:text-base">
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
    </section>
  );
}

export default DescriptionSection;
