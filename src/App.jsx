// import { useState } from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import Banner from "./assets/banner.jpg";
import Review from "./components/Review";
import AcWall from "./assets/ac wall.png";

import StarBorder from "./components/StarBorder/StarBorder.jsx";
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
            <StarBorder
              as="div"
              className="w-fit text-white"
              color="white"
              speed="2s"
              thickness={2}
            >
            <Link
                className="relative z-1 flex bg-[#A30F00] hover:bg-[#730B00] border border-[#FF0000] text-white text-center py-2.5 px-13 rounded-[15px]"
              to="/service"
            >
              Layanan
            </Link>
            </StarBorder>
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
            <img src={AcWall} alt="" srcset="" className="h-123 w-fit" />
            <div className="absolute bg-[#88271A] w-fit px-13 py-4.5 items-center flex bottom-[1.85rem] left-10">
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
            <p className="text-[#484848] tracking-widest leading-loose pr-54">
              Putra Service menyadari sepenuhnya betapa pentingnya membangun
              kepercayaan dengan pelanggan, dengan pengalaman belasan tahun
              dalam bidang perbaikan (service) AC yang bertanggung jawab dan
              memberi garansi, maka kami yakin dapat memberikan pelayanan
              terbaik dan terpercaya untuk Anda.
            </p>
            <Link
              className="w-fit text-white bg-[#A30F00] hover:bg-[#730B00] transition-all py-2.5 px-8 rounded-lg mt-4"
              to="/about"
            >
              Read More...
            </Link>
          </div>
        </div>
      </div>

      {/* mengapa harus kami */}
      <div className="min-h-screen flex flex-col items-center bg-[#9A0E00]">
        <div className="flex w-full h-29 items-end text-white">
          <div className="flex items-center w-full justify-between">
            <div className="w-94 bg-white h-5"></div>
            <h2 className=" font-bold text-[2.75rem] tracking-[0.04em] bottom-0">
              Mengapa Harus Kami ?
            </h2>
            <div className="w-94 bg-white h-5"></div>
          </div>
        </div>
        <div className="h-full w-full"> test</div>
      </div>

      <div className="relative min-h-screen">
        {/* Background */}
        <div className="min-h-screen absolute top-0 bottom-0 left-0 right-0">
           <div className="absolute rounded-full border-[#A30F00] border-32 size-[281px] top-15 -left-32"></div>
           <div className="absolute rounded-full border-[#A30F00] border-48 h-[436px] w-[456px] bottom-0 -right-79.5"></div>
        </div>
        {/* Content */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col h-full ">
            <h2  className="text-[#A20000] font-bold text-[4rem] tracking-[0.017em]">PUTRA SERVICE</h2>
            <h4 className="italic text-2xl tracking-[0.017em]">Siap Melayani Pelanggan Dengan Sepenuh Hati</h4>
          </div>
            <div className="h-full mt-15 flex items-center justify-center">
              <Link
              className="w-fit text-[#A4161A] font-semibold hover:bg-[#A30F00] active:bg-[#730B00] hover:text-white border-2 border-[#A4161A] transition-all py-3 px-8 rounded-lg"
              to="/about"
            >
              Pesan sekarang
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
