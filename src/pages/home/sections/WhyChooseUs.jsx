import React from "react";

import Tenaga from "../../../assets/Home/WhyChooseUs/tenagaProf.png";
import Peralatan from "../../../assets/Home/WhyChooseUs/peralatan.png";
import Harga from "../../../assets/Home/WhyChooseUs/hargaKom.png";

import Card from "../../../components/Home/WhyChooseUs/Card.jsx";

function WhyChooseUs() {
  return (
    <div className="min-h-[105vh] flex flex-col items-center bg-[#9A0E00]">
      <div className="flex w-full h-29 text-white items-end">
        <div className="flex items-center w-full justify-between">
          <div className="w-94 bg-white h-5"></div>
          <h2 className=" font-bold text-[2.75rem] tracking-[0.04em] bottom-0">
            Mengapa Harus Kami ?
          </h2>
          <div className="w-94 bg-white h-5"></div>
        </div>
      </div>
      <div className="flex justify-around items-center flex-1 w-full px-8">
        <Card
          image={Tenaga}
          title={"TENAGA PROFESIONAL"}
          description={
            "Team Kami bekerja secara jujur, efektif, efisien berbekal keahlian, komitmen dan pengalaman sudah lebih dari 10 tahun."
          }
        />
        <Card
          image={Peralatan}
          title={"PERALATAN YANG CANGGIH"}
          description={
            "Dengan dukungan peralatan canggih dan, kami mampu mendeteksi kerusakan AC secara lebih akurat dan melakukan perbaikan dengan lebih efisien."
          }
        />
        <Card
          image={Harga}
          title={"HARGA KOMPETITIF"}
          description={
            "Hilangkan kekhawatiran anda dengan memanfaatkan layanan perbaikan kami, dan biarkan para ahli kami yg menanganinya."
          }
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
