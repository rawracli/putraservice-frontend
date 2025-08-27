import React from "react";
import Layanan from "../../../components/Home/ServiceSection/Card";
import Ac from "../../../assets/Home/Layanan/ac.webp";
import Bg from "../../../assets/Home/Layanan/bg.webp";
import Bersih from "../../../assets/Home/Layanan/Logo/bersih.webp";
import Ganti from "../../../assets/Home/Layanan/Logo/ganti.webp";
import Instalasi from "../../../assets/Home/Layanan/Logo/instalasi.webp";
import Service from "../../../assets/Home/Layanan/Logo/service.webp";

function ServiceSection() {
  return (
    <section className="relative flex flex-col items-center min-h-svh overflow-hidden">
      <div className="font-semibold text-center pt-13 md:pt-20 mb-8">
        <h3 className="text-xl text-[#A4161A]">Jasa</h3>
        <h2 className="text-4xl tracking-wide">Layanan Kami</h2>
      </div>

      <div className="hidden lg:block h-fit">
        <img src={Bg} alt="" className="absolute bottom-0 left-0 max-w-155 xl:w-full" />
        <img src={Ac} alt="" className="absolute pl-12 z-10 w-150 -bottom-16 left-0" />
      </div>

      <div className="flex flex-col lg:flex-row w-full flex-1 relative">
        <div className="relative w-full lg:w-1/2 order-1 lg:order-1">
          <div className="relative lg:hidden block h-64 lg:h-full w-full">
            <img 
              src={Bg} 
              alt="" 
              className="absolute bottom-0 left-0 w-full h-full" 
            />
            <img 
              src={Ac} 
              alt="" 
              className="absolute -bottom-5 left-8 z-10 w-90 h-auto object-contain" 
            />
          </div>
        </div>

        <div className="relative w-full lg:w-160 xl:w-1/2 lg:flex-1 order-2 lg:order-2 mt-8 lg:mt-0 lg:flex lg:items-end lg:justify-end mr-2">
          <div className="z-10 w-full lg:w-160 xl:w-full flex px-4 lg:px-0 flex-col gap-4 justify-end *:rounded-lg">
            <Layanan
              image={Service}
              title={"serviceAC"}
              description={
                "Utamakan kenyamanan Anda dengan service AC cepat dan tepat. Dikerjakan oleh tim profesional, AC Anda kembali optimal dengan harga bersahabat"
              }
              className={"pl-0.5 pb-0.5"}
            />
            <Layanan
              image={Bersih}
              title={"cuciAC"}
              description={
                "Bersihkan AC secara rutin untuk kinerja optimal. Tim kami siap membersihkan hingga ke sela-sela terdalam dengan cepat dan aman."
              }
              className={""}
            />
            <Layanan
              image={Instalasi}
              title={"bongkarPasangAC"}
              description={
                "Kami melayani pembongkaran unit AC yang sudah terpasang serta pemasangan unit AC baru maupun lama. Kedua layanan ini dapat digunakan secara terpisah atau sekaligus."
              }
              className={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;