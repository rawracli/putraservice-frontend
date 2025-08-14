import React from "react";

import bg from "../../../assets/About/bg2.png";

import arrowUp from "../../../assets/About/arrowUp.png";

import Stack from "../../../components/About/StackedSection/Stack";

function StackedSection() {
  // const cards = [

  //   { id: 1, title: "Card 1", color: "#52B2CF" },

  //   { id: 2, title: "Card 2", color: "#E5A36F" },

  //   { id: 3, title: "Card 3", color: "#9CADCE" },

  //   { id: 4, title: "Card 4", color: "#D4AFB9" },

  // ];

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
            className="relative card-body box-border p-[30px] bg-white flex justify-center transition-all duration-500"
            style={{
              height: `var(--cardHeight)`,
            }}
          >
            <img src={bg} alt="" className="absolute bottom-0 left-0 h-153" />

            <div className="flex flex-col justify-center w-[84%]">
              <div className="pl-19">
                <h2 className="text-[2.7em] font-semibold mb-2">
                  Kami Hadir Sebagai Solusi Terbaik Anda
                </h2>

                <p className="text-[2.1rem] leading-14 tracking-tight">
                  Sebelum menentukan pilihan, penting untuk memastikan bahwa
                  Anda bekerja dengan pihak yang memiliki kompetensi,
                  integritas, dan komitmen tinggi terhadap kualitas
                  layanan.Berikut alasan mengapa kami menjadi mitra profesional
                  yang tepat untuk kebutuhan service AC Anda:
                </p>
              </div>
            </div>

            <div className="relative flex flex-1 items-center">
              <img src={arrowUp} alt="" className="absolute left-0" />
            </div>
          </div>
        </li>

        <Stack
          title={"Teknisi Berpengalaman dan Profesional"}
          description={
            "Tim kami beranggotakan tenaga ahli berpengalaman lebih dari 10 tahun di bidang layanan AC. Kami menjunjung tinggi kejujuran, ketelitian, dan tanggung jawab, serta selalu bekerja secara efektif dan efisien untuk memberikan hasil terbaik tanpa membuang waktu maupun biaya pelanggan. Dengan keahlian teknis yang mumpuni dan komitmen tinggi pada kualitas, kami menangani setiap unit AC secara menyeluruh — mulai dari diagnosa, perbaikan, hingga pengecekan akhir. Kepuasan dan kenyamanan pelanggan adalah prioritas utama kami."
          }
          number={1}
        />
        <Stack
          title={"Bergaransi"}
          description={
            "Kami memberikan garansi selama 1 bulan khusus untuk Pasang AC saja . Apabila dalam periode tersebut AC kembali mengalami masalah yang sama seperti yang telah ditangani, tim kami akan melakukan pengecekan dan perbaikan ulang tanpa biaya tambahan. Garansi ini merupakan bentuk komitmen kami terhadap kualitas kerja dan kepuasan pelanggan. Namun, garansi tidak mencakup kerusakan baru di luar area yang diperbaiki atau akibat faktor eksternal."
          }
          number={2}
        />
        <Stack
          title={"Harga Transfaran Dan Kompetitif"}
          description={
            "Kami memahami bahwa biaya adalah faktor penting bagi pelanggan. Karena itu, kami menerapkan harga transparan tanpa biaya tersembunyi. Layanan disesuaikan dengan kebutuhan dan kondisi AC Anda, sehingga Anda hanya membayar yang benar-benar diperlukan. Sebelum pekerjaan dimulai, kami memberikan estimasi harga jelas agar Anda dapat memutuskan dengan tenang. Layanan profesional tidak harus mahal — kami pastikan kualitas terbaik dengan harga yang wajar."
          }
          number={3}
        />
      </ul>
    </div>
  );
}

export default StackedSection;
