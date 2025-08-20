import React from "react";
import Tenaga from "../../../assets/Home/WhyChooseUs/tenagaProf.webp";
import Peralatan from "../../../assets/Home/WhyChooseUs/peralatan.webp";
import Harga from "../../../assets/Home/WhyChooseUs/hargaKom.webp";
import Card from "../../../components/Home/WhyChooseUs/Card.jsx";
function WhyChooseUs() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#9A0E00]">
      <div className="flex w-full h-fit pt-8 md:h-29 text-white items-end">
        <div className="flex items-center w-full justify-between">
          <div className="hidden sm:block w-full bg-white h-3 md:h-5"></div>
          <h2 className="w-full text-center sm:min-w-fit px-3 md:px-5 font-bold text-[2rem] md:text-[2.75rem] tracking-[0.04em] bottom-0">
            Mengapa Harus Kami&nbsp;?
          </h2>
          <div className="hidden sm:block w-full bg-white h-3 md:h-5"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 md:gap-8 px-8 sm:px-4 md:px-8 py-8 md:pb-8 md:pt-5">
        <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-4 md:gap-8 items-center flex-1 md:flex-none lg:flex-1 w-full ">
          <Card
            image={Tenaga}
            title={"TENAGA PROFESIONAL"}
            description={
              "Team Kami bekerja secara jujur, efektif, efisien berbekal keahlian, komitmen dan pengalaman sudah lebih dari 10 tahun."
            }
            className={"lg:min-h-[29rem]"}
          />
          <Card
            image={Peralatan}
            title={"PERALATAN YANG CANGGIH"}
            description={
              "Dengan dukungan peralatan canggih dan, kami mampu mendeteksi kerusakan AC secara lebih akurat dan melakukan perbaikan dengan lebih efisien."
            }
            className={"md:hidden lg:flex lg:min-h-[29rem]"}
          />
          <Card
            image={Harga}
            title={"HARGA KOMPETITIF"}
            description={
              "Hilangkan kekhawatiran anda dengan memanfaatkan layanan perbaikan kami, dan biarkan para ahli kami yg menanganinya."
            }
            className={"lg:min-h-[29rem]"}
          />
        </div>
        <Card
          image={Peralatan}
          title={"PERALATAN YANG CANGGIH"}
          description={
            "Dengan dukungan peralatan canggih dan, kami mampu mendeteksi kerusakan AC secara lebih akurat dan melakukan perbaikan dengan lebih efisien."
          }
          className={"hidden md:flex lg:hidden md:w-130 min-h-[20rem]"}
        />
      </div>
    </div>
  );
}
export default WhyChooseUs;
