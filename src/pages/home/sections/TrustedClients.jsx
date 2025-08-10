import React from "react";

import AmorCake from "../../../assets/Home/TrustedClients/Logo/amorcakes.png";
import BPJS from "../../../assets/Home/TrustedClients/Logo/BPJS Kesehatan.png";
import GlassHouse from "../../../assets/Home/TrustedClients/Logo/glass house.png";
import Gourmet from "../../../assets/Home/TrustedClients/Logo/gourmet.png";
import Gramedia from "../../../assets/Home/TrustedClients/Logo/gramedia.png";
import JanjiJiwa from "../../../assets/Home/TrustedClients/Logo/janji jiwa.png";
import KimiaFarma from "../../../assets/Home/TrustedClients/Logo/kimia farma.png";
import Pegadaian from "../../../assets/Home/TrustedClients/Logo/pegadaian.png";
import SCG from "../../../assets/Home/TrustedClients/Logo/scg.png";
import Smartfren from "../../../assets/Home/TrustedClients/Logo/smartfren.png";
import Line from "../../../assets/Home/TrustedClients/line.png";

function TrustedClients() {
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
    Line,
  };

  const photos = Object.entries(importedPhotos).map(([name, src]) => ({
    name,
    src,
  }));

  return (
    <div className="relative text-white bg-gradient-to-r from-black to-[#660708] h-118 items-center justify-center flex flex-col">
      <img src={Line} alt="" className="absolute" draggable="false" />
      <div className="relative">
        <h2 className="font-source-serif text-[2.8rem] font-semibold text-center pb-13">
          Mereka yang Telah Mempercayai Layanan Kami
        </h2>
        <div className="grid grid-cols-5 gap-2 mx-55">
          {photos.map((photo, index) => (
            <div className="h-25 flex items-center justify-center" key={index}>
              <img src={photo.src} alt={photo.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedClients;
