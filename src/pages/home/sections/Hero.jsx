import React from "react";
import { Link } from "react-router-dom";
import Stars from "../../../components/Home/Stars.jsx"
import StarBorder from "../../../components/Home/Hero/StarBorder.jsx"

import Discount from "../../../assets/Home/Hero/discount.png";
import Paku from "../../../assets/Home/Hero/paku.png";
import Banner from "../../../assets/Home/Hero/banner.jpg";
import Profile from "../../../assets/Home/profile.png";


function Hero() {
  return (
    <div
      className="relative min-h-screen"
    >
      <img src={Banner} className="absolute size-full object-cover" alt="" />
      <div className="flex flex-col  p-2 sm:pr-0 md:flex-row pt-9 md:pt-12 lg:pt-28 sm:pl-15 min-h-screen">
        <div className="z-10 md:w-[60%] flex-1 md:flex-none justify-center text-center sm:text-start  h-full items-center sm:items-start flex flex-col pt-19 text-white">
          <h1 className="text-[2.2rem] md:text-[3rem] lg:text-[3.85rem] font-bold tracking-wide leading-11 sm:leading-9 md:leading-16">
            SERVICE AC SUKABUMI
          </h1>
          <p className="pt-3 pb-5 text-[0.8rem] sm:mr-17 md:mr-0 md:leading-5 md:text-base font-poppins text-sm text-[#D3D3D3] pl-2 text-balance">
            Kami adalah tim profesional yang menyediakan jasa service AC untuk
            memenuhi kebutuhan pendinginan udara di rumah, kantor, dan tempat
            lainnya. Dengan pengalaman dan keahlian yang luas, kami menawarkan
            layanan service AC yang cepat, efektif, dan harga yang kompetitif.
          </p>
          <StarBorder
            as="div"
            className="w-fit ml-2 text-white"
            color="white"
            speed="2s"
            thickness={2}
          >
            <Link
              className=" relative z-1 flex bg-[#A30F00] hover:bg-[#730B00] border border-[#FF0000] text-white text-center py-2 px-13 rounded-lg"
              to="/service"
            >
              Layanan
            </Link>
          </StarBorder>
        </div>
        <div className="z-10  md:w-fit md:flex-1 justify-end gap-6 lg:justify-between flex flex-col items-end mb-8">
          <div className="relative shadow-[13px_10px_2px_rgba(0,_0,_0,_0.21)] bg-[#A42619] w-60 md:w-70 h-fit lg:w-83 lg:h-54 md:mt-25 sm:mr-7 mr-11 p-3 md:p-4 lg:p-6 pr-3">
            <img
              src={Paku}
              alt="paku"
              className="absolute w-19 md:w-22 lg:w-27 -top-9 right-18"
            />
            <img
              src={Discount}
              alt="discount"
              className="absolute -right-3 -bottom-4 w-13 md:w-16"
            />
            <div className="z-10 flex flex-col h-full">
              <h4 className="text-[#FFDF3E] text-sm font-extrabold mb-1">
                Promo Spesial !
              </h4>
              <div className="text-white font-bold text-[0.6rem] md:text-[0.7rem] lg:text-[0.75rem] flex-1 flex flex-col justify-between">
                <div>
                  <p>Cuci AC makin hemat :</p>
                  <ul className="list-disc pl-5">
                    <li>Cuci 5 → bayar hanya 4</li>
                    <li>cuci 6-9 → bayar jumlah unit dikurangi 1</li>
                    <li>cuci 10-14 → bayar jumlah unit dikurangi 2</li>
                    <li>cuci 15-19 → bayar jumlah unit dikurangi 3</li>
                  </ul>
                  <p>Dan Seterusnya!</p>
                </div>
                <p className="">Berlaku hanya dalam 1 kali transaksi</p>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-lg bg-white/80 w-60 md:w-70 lg:w-83 h-27 sm:mr-7 mr-11">
            <img src={Profile} alt="" className="mt-1 ml-4 mr-3 md:mt-2 md:mr-4 md:ml-7 w-14 md:w-18" />
            <div className="flex flex-col h-full py-1">
              {Stars({
                style: { height: "25px", width: "23px", marginRight: "3px" },
                readonly: true,
                initialRating: 4,
              })}
              <div className="pl-1">
                <div className="py-0.5">
                  <h3 className="pt-1 pb-1 text-[0.8rem] md:text-sm font-semibold leading-2">
                    Budiyono Siregar
                  </h3>
                  <h5 className="text-[9px] font-light text-[#494949]">
                    Maret 2025
                  </h5>
                </div>
                <p className="text-[10px] leading-3 md:leading-4 text-balance">
                  pelayanan nya rapih, cepat, dan memuaskan hasilnya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
