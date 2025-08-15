import React from "react";

function Hero({ title, backgroundImage, backgroundPosition, children, description }) {
  return (
    <div
      className="relative flex flex-col justify-center w-full bg-no-repeat bg-cover min-h-108 md:min-h-106 lg:min-h-104 isolate"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: `${backgroundPosition}` }}
    >
      <div className="bg-gradient-to-t to-70% from-[#BCBCBC] to-transparent opacity-40 absolute z-10 h-full w-full">
      </div>
      <div className="z-20 self-center sm:self-start mx-6 sm:ml-14 md:ml-20 pt-14">
        <h1 className="text-white sm:w-full text-[2rem] sm:text-[2.2rem] md:text-[2.813rem] pb-5 tracking-[0] font-bold">
          {title}
        </h1>
        <p className="text-[#ADADAD] sm:w-[54%] md:w-[60%] lg:w-[50%] xl:w-[45%] text-sm hidden sm:block">{description}</p>
      </div>
      {children}
    </div>
  );
}

export default Hero;
