import React from "react";
import Layanan from "../../../components/home/ServiceSection/Card";
import Ac from "../../../assets/Home/Layanan/ac.png";
import Bg from "../../../assets/Home/Layanan/bg.png";
import Bersih from "../../../assets/Home/Layanan/Logo/bersih.png";
import Ganti from "../../../assets/Home/Layanan/Logo/ganti.png";
import Instalasi from "../../../assets/Home/Layanan/Logo/instalasi.png";
import Service from "../../../assets/Home/Layanan/Logo/service.png";


function ServiceSection() {
  return (
    <div className="flex flex-col items-center min-h-[120vh]">
      <div className="font-semibold text-center pt-20">
        <h3 className="text-xl text-[#A4161A]">Jasa</h3>
        <h2 className="text-4xl tracking-wide">Layanan Kami</h2>
      </div>
      <div className="relative flex flex-1 w-full">
        <div className="w-[calc(50%-28px)] flex items-end">
          <img
            src={Ac}
            alt=""
            className="relative pl-12 z-10 w-[calc(100%-14px)] translate-y-16"
          />
        </div>
        <img src={Bg} alt="" className="absolute bottom-0 left-0 w-155" />
        <div className="z-10 w-1/2 mt-16 flex flex-col gap-4 justify-evenly *:rounded-lg">
          <Layanan
            image={Service}
            title={"Service AC"}
            description={
              "Utamakan kenyamanan Anda dengan service AC cepat dan tepat. Dikerjakan oleh tim profesional, AC Anda kembali optimal dengan harga bersahabat"
            }
            className={"pl-0.5 pb-0.5"}
          />
          <Layanan
            image={Bersih}
            title={"Pembersihan AC"}
            description={
              "Bersihkan AC secara rutin untuk kinerja optimal. Tim kami siap membersihkan hingga ke sela-sela terdalam dengan cepat dan aman."
            }
            className={""}
          />
          <Layanan
            image={Ganti}
            title={"Penggantian Suku Cadang AC"}
            description={
              "Pergantian suku cadang profesional dengan pilihan sparepart terbaik. AC lebih dingin, hemat energi, dan awet."
            }
            className={""}
          />
          <Layanan
            image={Instalasi}
            title={"Instalasi AC Baru"}
            description={
              "Layanan instalasi AC baru cepat dan rapi. Dengan tim profesional, kami pastikan AC Anda terpasang dengan aman dan berfungsi optimal sejak awal."
            }
            className={""}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
