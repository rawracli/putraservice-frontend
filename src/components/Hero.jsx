import React from "react";

function Hero({ title, backgroundImage, children, description }) {
  return (
    <div
      className="relative flex flex-col justify-center w-full bg-no-repeat bg-cover min-h-104"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="z-10 w-[44%] ml-20 pt-14">
        <h1 className="text-white text-[45px] pb-5 tracking-[0] font-bold">
          {title}
        </h1>
        <p className="text-[#ADADAD] text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default Hero;
