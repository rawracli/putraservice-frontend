import React from "react";
import { Link } from "react-router-dom";
import AcWall from "../../../assets/Home/AboutSection/ac wall.webp";

function AboutSection() {
  return (
    <div className="relative min-h-svh md:min-h-fit">
      {/* Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="overflow-hidden justify-between min-h-full flex flex-col relative">
          <div className="flex justify-end items-center mt-4 lg:mt-6 mr-5 sm:mr-7 lg:mr-24">
            <div className="size-[260px] md:size-[280px] lg:size-[310px] rounded-full bg-[#A20000] md:bg-[#A4161A] absolute -left-34 -top-27 md:-left-27 md:-top-8"></div>
            <div className="rounded-full bg-[#A42619] size-[100px] md:size-[114px] lg:size-[124px]"></div>
            <div className="rounded-full bg-[#E5533F] size-[34px] md:size-[39px] lg:size-[43px] mt-29"></div>
          </div>
          <div className="relative justify-end flex h-full w-full">
            <div className="absolute rounded-full border-[#88271A] lg:border-[#730B00] border-25 lg:border-41 size-[200px] lg:size-[355px] -bottom-20 md:-bottom-1 lg:-bottom-1 -right-30 md:-right-23 lg:-right-45"></div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="relative flex flex-col md:flex-row min-h-svh md:min-h-fit items-center md:items-start justify-center md:justify-around w-full pt-10 pb-10 md:py-30">
        <div className="md:flex-[70%] lg:flex-[79%] flex justify-end"> 
          <div className="ml-8 relative h-80 md:h-120 w-70 md:w-80 lg:h-123 lg:w-100">
            <div className="absolute z-10 bg-[#88271A] md:bg-[#8E2213] bottom-0 w-full px-13 py-3.5 md:py-4.5 items-center flex right-15">
              <h4 className="text-white text-nowrap font-bold text-[1.1rem] md:text-xl lg:text-2xl">
                10++ Years Of Experinces
              </h4>
            </div>
            <img src={AcWall} alt="" srcSet="" className="relative object-cover size-full rounded-4xl md:rounded-[4rem]" />
          </div>
        </div>
        <div className="w-full flex flex-col pl-5 md:pl-13 pt-2">
          <h2 className="text-[#A4161A] font-semibold text-lg lg:text-xl tracking-wide leading-13">
            Tentang
          </h2>
          <h3 className="font-semibold text-[2rem] leading-11 lg:text-[2.5rem] xl:text-[2.6rem] lg:leading-13 text-balance tracking-wide pb-4">
            Kepercayaan dan Kualitas Dalam Setiap Layanan
          </h3>
          <p className="text-[#484848] font-poppins tracking-widest text-[0.9rem] lg:text-base leading-[1.6] lg:leading-[1.8] pr-2 lg:pr-40">
            Putra Service menyadari sepenuhnya betapa pentingnya membangun
            kepercayaan dengan pelanggan, dengan pengalaman belasan tahun dalam
            bidang perbaikan (service) AC yang bertanggung jawab dan memberi
            garansi, maka kami yakin dapat memberikan pelayanan terbaik dan
            terpercaya untuk Anda.
          </p>
          <Link
            className="w-fit text-white text-[0.8rem] md:text-base bg-[#A30F00] font-semibold hover:bg-[#730B00] transition-all py-[0.4rem] px-5 md:py-2.5 md:px-8 rounded-lg mt-4"
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
