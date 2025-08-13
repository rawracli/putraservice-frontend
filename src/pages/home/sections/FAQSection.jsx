import React from "react";
import Person from "../../../assets/Home/FAQSection/person.webp";
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
        <p>Solusinya akan diketahui setelah pemeriksaan langsung oleh teknisi.</p>
      </>
    )
  },
  {
    title: "Bisa panggil teknisi ke rumah?",
    content: (
      <p>
        Tentu. Kami melayani servis panggilan ke rumah/kantor, tinggal atur jadwalnya. 
        Kami datang sesuai janji tanpa tambahan biaya transport untuk area dalam jangkauan.
      </p>
    )
  },
  {
    title: "Kapan waktu terbaik untuk servis AC?",
    content: (
      <p>
        Idealnya setiap 3-4 bulan sekali, tergantung intensitas pemakaian. 
        Untuk AC kantor atau tempat usaha, sebaiknya dilakukan lebih sering.
      </p>
    )
  },
  {
    title: "Apakah teknisi Anda berpengalaman dan bersertifikat?",
    content: (
      <p>
        Teknisi kami akan mengatur semua kebutuhan listrik selama servis berlangsung. 
        Namun, akses ke stop kontak dan saklar listrik tetap diperlukan.
      </p>
    )
  }
];

  return (
    <div className="flex min-h-screen bg-[#FFEAEA] pl-35">
      <div className="flex flex-col pt-16 pr-3 flex-1">
        <h2 className="font-semibold text-[2.7rem] tracking-[0.02em] pb-6 overflow-visible">
          Paling Sering Ditanyakan
        </h2>
        <div className="">
          {faqData.map((item, index) => (
            <DropDown 
              key={index} 
              name={"faq"}
              title={item.title} 
              styleTitle={{backgroundColor: "#A4161A"}}
              content={<div className="font-inter">{item.content}</div>
              } 
              styleContent={{backgroundColor: "#FFFFFF", color: "#3D3D3D"}}
              open={item.open} 
            />
          ))}
        </div>
      </div>
      <img src={Person} alt="faq" srcSet="" className="h-screen pl-14 pr-27" />
    </div>
  );
}

export default FAQSection;
