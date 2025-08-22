import React from "react";
import Person from "../../../assets/Home/FAQSection/person.webp";
import PersonOnly from "../../../assets/Home/FAQSection/personOnly.webp";
import DropDown from "../../../components/DropDown";

function FAQSection() {
  const faqData = [
    {
      title: "AC saya tidak dingin, kenapa ya?",
      open: true,
      content: (
        <>
          <p>Penyebab umum AC tidak dingin antara lain:</p>
          <ul className="list-disc pl-6 leading-tight">
            <li>Filter kotor</li>
            <li>Freon kurang atau habis</li>
            <li>Instalasi bocor</li>
            <li>Kompresor bermasalah</li>
          </ul>
          <p>
            Solusinya akan diketahui setelah pemeriksaan langsung oleh teknisi.
          </p>
        </>
      ),
    },
    {
      title: "Bisa panggil teknisi ke rumah?",
      content: (
        <p>
          Tentu. Kami melayani servis panggilan ke rumah/kantor, tinggal atur
          jadwalnya. Kami datang sesuai janji tanpa tambahan biaya transport
          untuk area dalam jangkauan.
        </p>
      ),
    },
    {
      title: "Kapan waktu terbaik untuk servis AC?",
      content: (
        <p>
          Idealnya setiap 3-4 bulan sekali, tergantung intensitas pemakaian.
          Untuk AC kantor atau tempat usaha, sebaiknya dilakukan lebih sering.
        </p>
      ),
    },
    {
      title: "Apakah teknisi Anda berpengalaman dan bersertifikat?",
      content: (
        <p>
          Teknisi kami akan mengatur semua kebutuhan listrik selama servis
          berlangsung. Namun, akses ke stop kontak dan saklar listrik tetap
          diperlukan.
        </p>
      ),
    },
  ];
  return (
    <div className="flex relative min-h-svh bg-[rgb(255,234,234)] md:pl-10 lg:pl-35 overflow-hidden">
      <div className="z-10 flex flex-col px-4 md:pl-0 md:pr-3 w-full md:w-[60%] lg:w-[50%] xl:w-1/2">
        <div className="relative pt-16 pb-6 w-full flex justify-center md:block md:justify-normal">
          <img src={PersonOnly} alt="faq" srcSet="" className="hidden sm:block md:hidden w-60 -bottom-12 -left-19 absolute" />
          <h2 className="relative w-fit font-semibold text-center md:text-start text-[2.7rem] tracking-[0.02em] leading-12 overflow-visible">
            Paling Sering <br className="md:hidden"/>Ditanyakan
          </h2>
        </div>
        <div className="z-10">
          {faqData.map((item, index) => (
            <DropDown
              key={index}
              name={"faq"}
              title={item.title}
              styleTitle={{ backgroundColor: "#A4161A" }}
              content={<div className="font-inter">{item.content}</div>}
              styleContent={{ backgroundColor: "#FFFFFF", color: "#3D3D3D" }}
              open={item.open}
            />
          ))}
        </div>
      </div>
      <img src={Person} alt="faq" srcSet="" className="hidden md:block h-full absolute md:-right-20 lg:right-12" />
    </div>
  );
}

export default FAQSection;
