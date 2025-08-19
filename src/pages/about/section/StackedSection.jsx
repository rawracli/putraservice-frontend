import React from "react";
import bg from "../../../assets/About/bg2.png";
import arrowUp from "../../../assets/About/arrowUp.png";
import Stack from "../../../components/About/StackedSection/Stack";

const stackedData = [
  {
    title: "Teknisi Berpengalaman dan Profesional",
    description:
      "Tim kami beranggotakan tenaga ahli berpengalaman lebih dari 10 tahun di bidang layanan AC. Kami menjunjung tinggi kejujuran, ketelitian, dan tanggung jawab, serta selalu bekerja secara efektif dan efisien untuk memberikan hasil terbaik tanpa membuang waktu maupun biaya pelanggan. Dengan keahlian teknis yang mumpuni dan komitmen tinggi pada kualitas, kami menangani setiap unit AC secara menyeluruh — mulai dari diagnosa, perbaikan, hingga pengecekan akhir. Kepuasan dan kenyamanan pelanggan adalah prioritas utama kami.",
  },
  {
    title: "Bergaransi",
    description:
      "Kami memberikan garansi selama 1 bulan khusus untuk Pasang AC saja . Apabila dalam periode tersebut AC kembali mengalami masalah yang sama seperti yang telah ditangani, tim kami akan melakukan pengecekan dan perbaikan ulang tanpa biaya tambahan. Garansi ini merupakan bentuk komitmen kami terhadap kualitas kerja dan kepuasan pelanggan. Namun, garansi tidak mencakup kerusakan baru di luar area yang diperbaiki atau akibat faktor eksternal.",
  },
  {
    title: "Harga Transfaran Dan Kompetitif",
    description:
      "Kami memahami bahwa biaya adalah faktor penting bagi pelanggan. Karena itu, kami menerapkan harga transparan tanpa biaya tersembunyi. Layanan disesuaikan dengan kebutuhan dan kondisi AC Anda, sehingga Anda hanya membayar yang benar-benar diperlukan. Sebelum pekerjaan dimulai, kami memberikan estimasi harga jelas agar Anda dapat memutuskan dengan tenang. Layanan profesional tidak harus mahal — kami pastikan kualitas terbaik dengan harga yang wajar.",
    link: true,
  },
];
function StackedSection() {
  return (
    <div className="w-full mx-auto mt-25">
      <ul
        id="cards"
        className="list-none pl-0 grid grid-cols-1 gap-[var(--cardMargin)]"
        style={{
          gridTemplateRows: `repeat(var(--cards), var(--cardHeight))`,
        }}
      >
        <li
          className="card sticky top-0"
          style={{
            paddingTop: `calc(var(--index) * var(--cardTopPadding))`,
          }}
        >
          <div
            className="relative card-body box-border lg:p-[30px] bg-white flex justify-center items-start ot-2 md:items-center transition-all duration-500"
            style={{
              height: `var(--cardHeight)`,
            }}
          >
            <img src={bg} alt="" className="absolute bottom-0 left-0 h-170 lg:h-153" />

            <div className="flex flex-col justify-center w-[90%] lg:w-[84%] z-10">
              <div className="pl-0">
                <h2 className="text-center pb-5 md:pb-0 sm:text-start text-[1.8em] sm:text-[2em] md:text-[2.3em] lg:text-[2.7em] xl:text-[3.3em] font-semibold mb-2">
                  Kami Hadir Sebagai Solusi Terbaik Anda
                </h2>

                <p className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] leading-[1.65] lg:leading-14 tracking-tight md:pr-20">
                  Sebelum menentukan pilihan, penting untuk memastikan bahwa
                  Anda bekerja dengan pihak yang memiliki kompetensi,
                  integritas, dan komitmen tinggi terhadap kualitas
                  layanan.Berikut alasan mengapa kami menjadi mitra profesional
                  yang tepat untuk kebutuhan service AC Anda:
                </p>
              </div>
            </div>
              <img src={arrowUp} alt="" className="absolute right-0 w-32 lg:w-48 bottom-13 lg:bottom-25" />
          </div>
        </li>

        {stackedData.map((value, index) => (
          <Stack
            title={value.title}
            description={value.description}
            number={index}
            link={value.link}
            index={index}
          />
      ))}
      </ul>
    </div>
  );
}

export default StackedSection;
