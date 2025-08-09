// TODO: Reorganize everything
// import { useState } from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import Review from "./components/Review";
import Card from "./components/whyChooseUse/Card.jsx";
import DropDown from "./components/faq/DropDown.jsx";
import Layanan from "./components/Home/Layanan.jsx";

import Banner from "./assets/banner.jpg";
import AcWall from "./assets/ac wall.png";
import Tenaga from "./assets/tenagaProf.png";
import Peralatan from "./assets/peralatan.png";
import Harga from "./assets/hargaKom.png";
import Photo1 from "./assets/photos/1.jpg";
import Photo2 from "./assets/photos/2.jpg";
import Photo3 from "./assets/photos/3.jpg";
import Photo4 from "./assets/photos/4.jpg";
import Photo5 from "./assets/photos/5.jpg";
import Photo6 from "./assets/photos/6.jpg";
import FAQ from "./assets/faq.webp";
import Line from "./assets/line.png";
import AmorCake from "./assets/Logo/amorcakes.png";
import BPJS from "./assets/Logo/BPJS Kesehatan.png";
import GlassHouse from "./assets/Logo/glass house.png";
import Gourmet from "./assets/Logo/gourmet.png";
import Gramedia from "./assets/Logo/gramedia.png";
import JanjiJiwa from "./assets/Logo/janji jiwa.png";
import KimiaFarma from "./assets/Logo/kimia farma.png";
import Pegadaian from "./assets/Logo/pegadaian.png";
import SCG from "./assets/Logo/scg.png";
import Smartfren from "./assets/Logo/smartfren.png";
import Ac from "./assets/Home/Layanan/ac.png";
import Bg from "./assets/Home/Layanan/bg.png";
import Bersih from "./assets/Home/Layanan/Logo/bersih.png";
import Ganti from "./assets/Home/Layanan/Logo/ganti.png";
import Instalasi from "./assets/Home/Layanan/Logo/instalasi.png";
import Service from "./assets/Home/Layanan/Logo/service.png";
import Discount from "./assets/discount.png";
import Paku from "./assets/paku.png";

import { RiArrowDropDownLine } from "react-icons/ri";

import StarBorder from "./components/reactBits/StarBorder.jsx";
import Lanyard from "./components/reactBits/Lanyard/Lanyard.jsx";
import EmblaCarousel from "./components/Home/EmblaCarousel.jsx";

function App() {
  return (
    <div className="App">
      {/* 1st section */}
      <div
        className="min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex pt-28 pl-15 min-h-screen">
          <div className="w-full h-full flex flex-col pt-19 text-white">
            <h1 className="text-[3.85rem] font-bold tracking-wide leading-16">
              SERVICE AC SUKABUMI
            </h1>
            <p className="pt-3 pb-5  leading-5 font-poppins text-sm text-[#D3D3D3] pl-2 text-balance">
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
                className="relative z-1 flex bg-[#A30F00] hover:bg-[#730B00] border border-[#FF0000] text-white text-center py-2 px-13 rounded-lg"
                to="/service"
              >
                Layanan
              </Link>
            </StarBorder>
          </div>
          <div className="w-full justify-between flex flex-col items-end mb-8">
            <div className="relative shadow-[13px_10px_2px_rgba(0,_0,_0,_0.21)] bg-[#A42619] w-83 h-54 mt-25 mr-11 pr-3 pl-6 pt-6 pb-6">
              <img
                src={Paku}
                alt="paku"
                className="absolute w-27 -top-9 right-18"
              />
              <img
                src={Discount}
                alt="discount"
                className="absolute -right-3 -bottom-4 w-16"
              />
              <div className="z-10 flex flex-col h-full">
                <h4 className="text-[#FFDF3E] text-sm font-extrabold mb-1">
                  Promo Spesial !
                </h4>
                <div className="text-white font-bold text-[12px] flex-1 flex flex-col justify-between">
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
            <Review
              starsStyle={{ height: "25px", width: "23px", marginRight: "3px" }}
            />
          </div>
        </div>
      </div>

      {/* harga mulai dari */}
      <div className="h-[174px] w-full bg-gradient-to-b from-[#660708] to-[#BA181B] flex items-center justify-center">
        <h2 className="text-white font-inter font-bold text-5xl">
          HARGA MULAI DARI 75.000 !!
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
              kepercayaan dengan pelanggan, dengan pengalaman belasan tahun
              dalam bidang perbaikan (service) AC yang bertanggung jawab dan
              memberi garansi, maka kami yakin dapat memberikan pelayanan
              terbaik dan terpercaya untuk Anda.
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

      {/* mengapa harus kami */}
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

      {/* garansi */}
      <div className="relative flex min-h-[95vh] items-center justify-center font-semibold overflow-hidden font-inter">
        <h2 className="text-[7.5rem] tracking-[0.016em] pr-3">BERGARANSI</h2>
        <div className="relative flex items-center">
          <h5 className="text-[#A20000] shadow-black drop-shadow-md text-shadow-[5px_2.5px_2px_rgba(0,_0,_0,_0.21)] text-xl pt-25">
            Selama
          </h5>
          <h3 className="absolute leading-70 left-10 -bottom-30 text-[#A20000] text-[21rem] tracking-[-0.07em] text-shadow-[20px_10px_4px_rgba(0,_0,_0,_0.21)]">
            1<sup className="text-[4rem] text-shadow-none -top-57 ">*</sup>
          </h3>
        </div>
        <h4 className="pl-28 pt-15 text-6xl">Bulan</h4>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={34} />
      </div>

      {/* pemercaya */}
      {/* //TODO: optimize this section */}
      <div className="relative text-white bg-gradient-to-r from-black to-[#660708] h-118 items-center justify-center flex flex-col">
        <img src={Line} alt="" className="absolute" draggable="false" />
        <div className="relative">
          <h2 className="font-source-serif text-[2.8rem] font-semibold text-center pb-13">
            Mereka yang Telah Mempercayai Layanan Kami
          </h2>
          <div className="grid grid-cols-5 gap-2 mx-55">
            <div className="h-25 flex items-center">
              <img src={Gourmet} alt="" />
            </div>
            <div className="h-25 flex items-center">
              <img src={Gramedia} alt="" />
            </div>
            <div className="h-25 flex items-center">
              <img src={AmorCake} alt="" />
            </div>
            <div className="h-25 flex items-center">
              <img src={BPJS} alt="" />
            </div>
            <div className="h-25 flex items-center">
              <img src={Smartfren} alt="" />
            </div>
            <div className="h-25 flex items-center justify-center">
              <img src={GlassHouse} alt="" className="h-25" />
            </div>
            <div className="h-25 flex items-center">
              <img src={JanjiJiwa} alt="" />
            </div>
            <div className="h-25 flex items-center">
              <img src={SCG} alt="" />
            </div>
            <div className="h-25 flex items-center">
              <img src={Pegadaian} alt="" />
            </div>
            <div className="h-25 flex items-center pb-7">
              <img src={KimiaFarma} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* layanan */}
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

      {/* testimoni */}
      <div className="h-fit">
        <div className="h-62 flex flex-col items-center justify-center font-semibold text-center">
          <h3 className="text-[#A4161A] text-[1.3rem] pb-1">Testimoni</h3>
          <h2 className="text-[2.65rem] leading-12">
            Apa Kata Mereka Tentang <br /> Layanan Kami
          </h2>
        </div>
        <EmblaCarousel />
      </div>

      {/* dokumentasi */}
      <div className="h-screen flex items-center ">
        <div className="flex flex-col pl-33 pr-17">
          <h4 className="text-[#A4161A] font-semibold text-xl pl-2">Work</h4>
          <h2 className="font-semibold text-[5.4rem] w-70 wrap-anywhere text-balance leading-26 tracking-wide">
            DOKUMEN TASI
          </h2>
        </div>
        <div className="flex-1 h-full items-center justify-center flex flex-col gap-3 pr-3">
          <div className="flex w-full h-64 mt-10 gap-3">
            <img
              src={Photo1}
              alt=""
              srcSet=""
              className="rounded-lg w-[257px] object-cover"
            />
            <img
              src={Photo2}
              alt=""
              srcSet=""
              className="rounded-lg w-[257px] object-cover"
            />
            <img
              src={Photo3}
              alt=""
              srcSet=""
              className="rounded-lg w-[257px] object-cover object-[50%_20%]"
            />
          </div>
          <div className="flex w-full h-64 gap-3">
            <img
              src={Photo4}
              alt=""
              srcSet=""
              className="rounded-lg w-[257px] object-cover"
            />
            <img
              src={Photo5}
              alt=""
              srcSet=""
              className="rounded-lg w-[257px] object-cover object-[30%]"
            />
            <img
              src={Photo6}
              alt=""
              srcSet=""
              className="rounded-lg w-[257px] object-cover object-[50%_100%]"
            />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="flex min-h-screen bg-[#FFEAEA] pl-35">
        <div className="flex flex-col pt-16 pr-3 flex-1">
          <h2 className="font-semibold text-[2.7rem] tracking-[0.03em] pb-6">
            Paling Sering Ditanyakan
          </h2>
          <div className="">
            <DropDown
              title={"AC saya tidak dingin, kenapa ya?"}
              open="true"
              content={
                <>
                  <p>Penyebab umum AC tidak dingin antara lain:</p>
                  <ul className="list-disc pl-6 leading-tight">
                    <li>Filter kotor</li>
                    <li>Freon kurang atau habis</li>
                    <li>Instalasi bocor</li>
                    <li>Kompresor bermasalah</li>
                  </ul>
                  <p>
                    Solusinya akan diketahui setelah pemeriksaan langsung oleh
                    teknisi.
                  </p>
                </>
              }
            />
            <DropDown
              title={"Bisa panggil teknisi ke rumah?"}
              content={
                <p>
                  Tentu. Kami melayani servis panggilan ke rumah/kantor, tinggal
                  atur jadwalnya. Kami datang sesuai janji tanpa tambahan biaya
                  transport untuk area dalam jangkauan.
                </p>
              }
            />
            <DropDown
              title={"Kapan waktu terbaik untuk servis AC?"}
              content={
                <p>
                  Idealnya setiap 3-4 bulan sekali, tergantung intensitas
                  pemakaian. Untuk AC kantor atau tempat usaha, sebaiknya
                  dilakukan lebih sering.
                </p>
              }
            />
            <DropDown
              title={"Apakah teknisi Anda berpengalaman dan bersertifikat?"}
              content={
                <p>
                  Teknisi kami akan mengatur semua kebutuhan listrik selama
                  servis berlangsung. Namun, akses ke stop kontak dan saklar
                  listrik tetap diperlukan.
                </p>
              }
            />
          </div>
        </div>
        <img src={FAQ} alt="faq" srcSet="" className="h-screen pl-14 pr-27" />
      </div>

      <div className="overflow-hidden relative min-h-screen">
        {/* Background */}
        <div className="min-h-screen absolute top-0 bottom-0 left-0 right-0">
          <div className="absolute rounded-full border-[#A30F00] border-32 size-[281px] top-15 -left-32"></div>
          <div className="absolute rounded-full border-[#A30F00] border-48 h-[436px] w-[456px] bottom-0 -right-79.5"></div>
        </div>
        {/* Content */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center">
          <div className=" flex flex-col h-full ">
            <h2 className="text-[#A20000] font-bold text-[4rem] leading-29 tracking-[0.014  em]">
              PUTRA SERVICE
            </h2>
            <h4 className="italic text-2xl font-poppins tracking-[0.013em]">
              Siap Melayani Pelanggan Dengan Sepenuh Hati
            </h4>
          </div>
          <div className="h-full mt-12 flex items-center justify-center">
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
