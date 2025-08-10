import React from "react";
import { Link } from "react-router-dom";
import AcWall from "../../../assets/Home/AboutSection/ac wall.png";

function AboutSection() {
  return (
    <div className="relative h-[120vh]">
      {/* Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="overflow-hidden justify-between min-h-full flex flex-col relative">
          <div className="flex justify-end items-center mt-6 mr-26.5">
            <div className="size-[310px] rounded-full bg-[#941A1D] absolute -left-27 -top-8"></div>
            <div className="rounded-full bg-[#A42619] size-[124px]"></div>
            <div className="rounded-full bg-[#E5533F] w-[43px] h-[48px] mt-29"></div>
          </div>
          <div className="relative justify-end flex h-full w-full">
            <div className="absolute rounded-full border-[#730B00] border-41 size-[355px] -bottom-1 -right-39"></div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative flex h-full w-full py-30">
        <div className="relative min-w-fit pl-34">
          <img src={AcWall} alt="" srcSet="" className="h-123 w-fit" />
          <div className="absolute bg-[#88271A] w-fit px-13 py-4.5 mt-5 items-center flex bottom-[1.7rem] left-10">
            <h4 className="text-white font-bold text-2xl">
              10++ Years Of Experinces
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-col pl-13 pt-2">
          <h2 className="text-[#A4161A] font-semibold text-xl tracking-wide leading-13">
            Tentang
          </h2>
          <h3 className="font-semibold text-[2.6rem] leading-13 text-balance tracking-wide pb-4">
            Kepercayaan dan Kualitas Dalam Setiap Layanan
          </h3>
          <p className="text-[#484848] font-poppins tracking-widest leading-loose pr-54">
            Putra Service menyadari sepenuhnya betapa pentingnya membangun
            kepercayaan dengan pelanggan, dengan pengalaman belasan tahun dalam
            bidang perbaikan (service) AC yang bertanggung jawab dan memberi
            garansi, maka kami yakin dapat memberikan pelayanan terbaik dan
            terpercaya untuk Anda.
          </p>
          <Link
            className="w-fit text-white bg-[#A30F00] font-semibold hover:bg-[#730B00] transition-all py-2.5 px-8 rounded-lg mt-4"
            to="/about"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
