// import { useState } from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import Banner from "./assets/banner.jpg";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      {/* 1st section */}
      <div
        className="min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex pt-25 pl-20 pr-16 min-h-screen">
          <div className="w-full h-full flex flex-col pt-19 text-white">
            <h1 className="text-7xl font-semibold tracking-wider leading-21">
              SERVICE AC SUKABUMI
            </h1>
            <p className="pt-3 leading-5">
              Kami adalah tim profesional yang menyediakan jasa service AC untuk
              memenuhi kebutuhan pendinginan udara di rumah, kantor, dan tempat
              lainnya. Dengan pengalaman dan keahlian yang luas, kami menawarkan
              layanan service AC yang cepat, efektif, dan harga yang kompetitif.
            </p>
            <Link
              className="w-fit bg-[#A30F00] hover:bg-[#730B00] transition-all py-2.5 px-13 rounded-lg mt-9"
              to="/service"
            >
              Layanan
            </Link>
          </div>
          <div className="w-full justify-end flex items-end mb-12">
            <Review starsStyle={{ height: "30px", width: "32px" }} />
          </div>
        </div>
      </div>

      {/* harga mulai dari */}
      <div className="h-[174px] w-full bg-gradient-to-b from-[#660708] to-[#BA181B] flex items-center justify-center">
        <h2 className="text-white font-bold text-5xl">
          HARGA DI MULAI DARI 75.000 !!
        </h2>
      </div>

      {/* tentang */}
      <div className="relative h-screen">
        {/* Background */}
        <div className="absolute inset-0 h-full w-full">
          <div className="overflow-hidden justify-between min-h-screen flex flex-col relative">
            <div className="flex justify-end items-center mt-11 mr-26.5">
              <div className="size-[310px] rounded-full bg-[#941A1D] absolute -left-27 -top-8"></div>
              <div className="rounded-full bg-[#A42619] size-[124px]"></div>
              <div className="rounded-full bg-[#E5533F] w-[43px] h-[48px] mt-29"></div>
            </div>
            <div className="relative justify-end flex h-[500px] w-full">
              <div className="absolute rounded-full border-[#730B00] border-45 size-[385px]  -bottom-1 -right-39"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
        </div>
      </div>
    </div>
  );
}

export default App;
