import React, { useEffect, useState } from "react";

import AmorCake from "../../../assets/Home/TrustedClients/Logo/amorcakes.webp";
import BPJS from "../../../assets/Home/TrustedClients/Logo/BPJS Kesehatan.webp";
import GlassHouse from "../../../assets/Home/TrustedClients/Logo/glass house.webp";
import Gourmet from "../../../assets/Home/TrustedClients/Logo/gourmet.webp";
import Gramedia from "../../../assets/Home/TrustedClients/Logo/gramedia.webp";
import JanjiJiwa from "../../../assets/Home/TrustedClients/Logo/janji jiwa.webp";
import KimiaFarma from "../../../assets/Home/TrustedClients/Logo/kimia farma.webp";
import Pegadaian from "../../../assets/Home/TrustedClients/Logo/pegadaian.webp";
import SCG from "../../../assets/Home/TrustedClients/Logo/scg.webp";
import Smartfren from "../../../assets/Home/TrustedClients/Logo/smartfren.webp";
import Line from "../../../assets/Home/TrustedClients/line.webp";

function TrustedClients() {
    const [deg, setDeg] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDeg(width % 360); // ambil angka derajat dari width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // trigger pertama kali
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const importedPhotos = {
    AmorCake,
    BPJS,
    GlassHouse,
    Gourmet,
    Gramedia,
    JanjiJiwa,
    KimiaFarma,
    Pegadaian,
    SCG,
    Smartfren,
  };

  const photos = Object.entries(importedPhotos).map(([name, src]) => ({
    name,
    src,
  }));

  return (
    <div className="relative text-white min-h-svh md:min-h-[300px] items-center justify-center flex flex-col py-8"
    style={{
        backgroundColor: "#003366",
        backgroundImage: `linear-gradient(${deg}deg, rgba(0,0,0,1), rgba(102,7,8,1))`,
      }}>
      <img src={Line} alt="" className="absolute h-full lg:h-fit" draggable="false" />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="font-source-serif text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-semibold text-center pb-8 md:pb-13">
          Mereka yang Telah Mempercayai Layanan Kami
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          {photos.map((photo, index) => (
            <div className="h-20 sm:h-24 md:h-25 flex items-center justify-center" key={index}>
              <img src={photo.src} alt={photo.name} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedClients;