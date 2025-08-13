  import "./Service.css";
  import Hero from "../../components/Hero";
  import CTASection from "./section/CTASection";
  import Banner from "../../assets/Service/bg.png";
  import Photo from "../../assets/Service/photo.png";
  import clockRed from "../../assets/Service/Logo/clockRed.svg";
  import checkRed from "../../assets/Service/Logo/checkRed.svg";
  import { useSearchParams } from "react-router-dom";
  import DescriptionSection from "./section/DescriptionSection";
  import PriceList from "./section/PriceList";
  import useScrollBehaviour from "../../hooks/useScrollBehaviour";

  const categories = ["serviceAC", "pembersihanAC", "bongkarPasangAC"];
  const descriptionData = [
    [
      {
        title: "Service AC",
        image: Photo,
        description:
          "Perawatan dan pengecekan menyeluruh untuk memastikan AC Anda tetap bekerja optimal. Kami menangani berbagai kendala seperti AC tidak dingin, bocor air, suara berisik, hingga mati total.",
        layanan: [
          "Pengecekan tekanan freon & kelistrikan ",
          "Pemeriksaan sensor, PCB, kapasitor",
          "Pemeriksaan sensor, PCB, kapasitor",
          "Penanganan kebocoran ringan",
          "Pengujian performa unit",
        ],
        bottomInfo: {
          image: clockRed,
          information:
            "Estimasi waktu: ±30-90 menit (tergantung tingkat kerusakan dan ukuran kapasitas AC Anda)",
        },
      },
    ],
    [
      {
        title: "Pembersihan AC",
        image: Photo,
        description:
          "Pembersihan AC secara menyeluruh dari filter, evaporator, blower, hingga outdoor unit. Ideal dilakukan secara berkala untuk menjaga performa dan kebersihan udara ruangan.",
        layanan: [
          "Cuci unit indoor & outdoor",
          "Semprot blower & evaporator",
          "Cuci filter",
          "Uji fungsi AC setelah dibersihkan",
        ],
        bottomInfo: {
          image: clockRed,
          information:
            "Estimasi waktu: ±30-90 menit (tergantung tingkat kekotoran dan ukuran kapasitas AC Anda)",
        },
      },
    ],
    [
      {
        title: "Pasang AC",
        image: Photo,
        description:
          "Kami siap membantu pemasangan unit AC baru di rumah, kantor, atau toko Anda. Dikerjakan oleh teknisi berpengalaman dengan alat lengkap dan pemasangan rapi.",
        layanan: [
          "Pemasangan unit indoor & outdoor",
          "Penarikan pipa AC",
          "Pemasangan Bracket dan sealer",
          "Uji coba sistem pendingin",
        ],
        bottomInfo: {
          image: checkRed,
          information: "Garansi service: 1 bulan (syarat & ketentuan berlaku)",
        },
      },
      {
        title: "Bongkar AC",
        image: Photo,
        description:
          "Kami melayani pembongkaran AC dengan hasil rapi, cepat, dan aman. Cocok untuk kebutuhan pemindahan, renovasi, atau pelepasan unit AC di rumah, kantor, maupun tempat usaha. Proses dikerjakan oleh teknisi berpengalaman menggunakan peralatan lengkap, dengan prosedur pembongkaran yang terjamin aman bagi unit dan instalasi.",
        layanan: [
          "Pembongkaran unit indoor & outdoor",
          "Pelepasan pipa & kabel dengan hati-hati",
          "Penutupan lubang bekas instalasi (opsional)",
          "Pengecekan kondisi unit setelah dibongkar",
        ],
        bottomInfo: {
          image: checkRed,
          information:
            "Estimasi waktu: ±40-90 menit (tergantung lokasi dan ukuran kapasitas AC Anda)",
        },
      },
    ],
  ];
  const priceList = [
    [
      {
        title: "Tambah Freon",
        table: {
          thead: ["Tipe Freon", "Harga", "Keterangan"],
          tbody: [
            ["R22", "RP 250.000/unit", "Ukuran 1/2 - 1 PK"],
            ["R22", "RP 300.000/unit", "Ukuran 1,5 - 2 PK"],
            ["R410A", "RP 250.000/unit", "Ukuran 1/2 - 1 PK"],
            ["R410A", "RP 300.000/unit", "Ukuran 1,5 - 2 PK"],
            ["R32", "RP 300.000/unit", "Ukuran 1/2 - 1 PK"],
            ["R32", "RP 350.000/unit", "Ukuran 1,5 - 2 PK"],
          ],
        },
      },
      {
        title: "Isi Freon Dari Kosong",
        table: {
          thead: ["Tipe Freon", "Harga", "Keterangan"],
          tbody: [
            ["R22", "RP 300.000/unit", "Ukuran 1/2 - 1 PK"],
            ["R22", "RP 350.000/unit", "Ukuran 1,5 - 2 PK"],
            ["R410A", "RP 300.000/unit", "Ukuran 1/2 - 1 PK"],
            ["R410A", "RP 350.000/unit", "Ukuran 1,5 - 2 PK"],
            ["R32", "RP 350.000/unit", "Ukuran 1/2 - 1 PK"],
            ["R32", "RP 400.000/unit", "Ukuran 1,5 - 2 PK"],
          ],
        },
      },
      {
        title: "Kabel Listrik Stop Kontak",
        table: {
          thead: ["Tipe Kabel", "Harga", "Keterangan"],
          tbody: [
            ["Eterna", "Rp 15.000/meter", "Ukuran 2 x 1,5 mm"],
            ["Eterna NYM", "Rp 17.500/meter", "Ukuran 3 x 1,5 mm"],
            ["Eterna NYM", "Rp 20.000/meter", "Ukuran 3 x 2,5 mm"],
            ["Stop Kontak AC Kaki 3", "Rp85.000/set", "Merek Panasonic"],
            ["Stop Kontak AC Kaki 3", "Rp35.000/set", "Merek Broco"],
          ],
        },
      },
      {
        title: "Capacitor",
        table: {
          thead: ["Tipe Capicator", "Harga", "Keterangan"],
          tbody: [
            ["0,5 - 1 PK", "Rp 250.000/unit", "Garansi 6 bulan"],
            ["1,5 - 2 PK", "Rp 300.000/unit", "Garansi 6 bulan"],
            ["Capicator Fan", "Rp 150.000/unit", "Garansi 6 bulan"],
          ],
        },
      },
      {
        title: "Pipa Refrigerant",
        table: {
          thead: ["Tipe Pipa", "Harga", "Keterangan"],
          tbody: [
            ["1/2 - 1 PK (1/4″-3/8″)", "Rp 85.000/meter", ""],
            ["1,5 - 2 PK (1/4″-1/2″)", "Rp 95.000/meter", ""],
          ],
        },
      },
      {
        title: "Sparepart",
        table: {
          thead: ["Tipe Sparepart", "Harga", "Keterangan"],
          tbody: [
            ["Temis-termostat", "Rp 150.000/unit", ""],
            [
              "Dinamo Motor Fan Indoor",
              "Rp 350.000/unit",
              "0,5pk - 2pk / 1phase AC (garansi 6 bulan)",
            ],
            [
              "Dinamo Motor Fan Outfoor",
              "Rp 475.000/unit",
              "0,5pk - 2pk / 1phase AC (garansi 6 bulan)",
            ],
            [
              "Dynamo motor swing",
              "Rp 125.000/unit",
              "Merek Panasonic, Sharp, LG",
            ],
            ["Pipa Drain/pembuangan", "Rp 10.000/meter", ""],
            ["Bracket dudukan AC outdoor", "Rp 75.000/set", "Ukuran 1/2 - 1 PK"],
            ["Remot multi AC", "Rp 75.000/pcs", "Semua merek"],
          ],
        },
      },
    ],
    [
      {
        title: "Pembersihan AC Biasa",
        table: {
          thead: ["Tipe AC", "Harga", "Keterangan"],
          tbody: [
            ["AC Split", "Rp 75.000/unit", "Semua tipe 0,5 - 2 PK"],
            ["AC Cassate", "Rp 250.000/unit", "Semua tipe 2 - 7,5 PK"],
            ["AC Celling", "Rp 250.000/unit", "Semua tipe 2 - 7,5 PK"],
            [
              "AC Central / Split Duct",
              "Rp 450.000/unit",
              "Semua tipe 5 - 15 PK",
            ],
            ["AC Standing", "Rp 250.000/unit", "Semua tipe 2 - 10 PK"],
          ],
        },
      },
      {
        title: "Pembersihan AC Biasa",
        table: {
          thead: ["Tipe AC", "Harga", "Keterangan"],
          tbody: [
            [
              "AC Split",
              "Rp 250.000/unit",
              "Cuci total indoor turun, semua tipe",
            ],
            ["AC Cassate", "Rp 200.000/pk", "Kipas indoor dilepas dari grill"],
          ],
        },
      },
    ],
    [
      {
        title: "Bongkara",
        table: {
          thead: ["Tipe AC", "Harga", "Keterangan"],
          tbody: [
            ["AC Split", "Rp 150.000/unit", "Untuk semua ukuran AC Split"],
            ["AC Cassete", "Rp 400.000/unit", "Untuk semua ukuran AC Cassete"],
            ["AC Standing", "Rp 300.000/unit", "Untuk ukuran AC di bawah 5 PK"],
            ["AC Central /Unit call", "", ""],
          ],
        },
      },
      {
        title: "Pasang Baru / Bekas",
        table: {
          thead: ["Tipe AC", "Harga", "Keterangan"],
          tbody: [
            ["AC Split baru", "Rp 300.000/unit", "Non material"],
            ["AC split bekas", "Rp 300.000/unit", "Non material"],
            ["AC Cassete", "Rp 500.000/unit", "Non material dan intalasi"],
            ["AC Standing", "Rp 500.000/unit", "Non material dan intalasi"],
          ],
        },
      },
      {
        title: "Bongkar Pasang",
        table: {
          thead: ["Tipe AC", "Harga", "Keterangan"],
          tbody: [
            ["AC Split", "Rp 400.000/unit", "Non material dan Freon"],
            ["AC Cassete", "Rp 850.000/unit", "Non material dan Freon"],
            ["AC Standing", "Rp 750.000/unit", "Non material dan Freon pipa"],
            [
              "Pipa Refrigeranta",
              "Rp 75.000/meter",
              "Ukuran 1/2pk - 1pk (1/4″-3/8″)",
            ],
          ],
        },
      },
    ],
  ];
  function Service() {
    const {isVisible} = useScrollBehaviour();
    const [searchParams, setSearchParams] = useSearchParams();
    // default (index 0)
    const currentCategory = searchParams.get("category") || "serviceAC";
    console.log(currentCategory);
    const currentIndex = categories.indexOf(currentCategory);
    const displayIndex = currentIndex !== -1 ? currentIndex : 0;

    const handleCategoryChange = (category) => {
      setSearchParams({ category });
    };
    return (
      <div className="service">
        <Hero
          title={"LAYANAN & HARGA"}
          backgroundImage={Banner}
          description={
            "Penyedia Layanan Jasa Service AC, Pembersihan AC, pengganti suku cadang AC, Instalasi AC baru di Sukabumi yang Profesional dengan harga terjangkau dan bergaransi dengan layanan terbaik. Mulai dari cuci AC, penambahan freon AC, pengisian freon AC, perbaikan AC, pemasangan AC, dan Pengadaan sparepart AC. KEJUJURAN KUNCI UTAMA KAMI"
          }
        />
        <div className={`my-10 sticky transition-all duration-300 ${isVisible ? "top-20" : "top-0"}`}>
          <div className="flex gap-3 lg:gap-7 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer px-6 py-2 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] border-2 border-[#A30F00] rounded-full text-[#A30F00] transition font-semibold hover:bg-[#A30F00] hover:text-white ${
                  currentCategory === category
                    ? "bg-[#730B00] border-[#730B00] text-white shadow-lg"
                    : ""
                }`}
              >
                {category
                  .replace(/(?!^)(?<!A)([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
        {descriptionData[displayIndex].map((value, index) => (
          <DescriptionSection
            key={index}
            image={value.image}
            title={value.title}
            description={value.description}
            layanan={value.layanan}
            bottomIcon={value.bottomInfo.image}
            bottomInfo={value.bottomInfo.information}
            className={index % 2 == 1 ? "md:flex-row-reverse" : ""}
          />
        ))}
        <PriceList listTable={priceList[displayIndex]} name={currentCategory}/>
        <CTASection />
      </div>
    );
  }

  export default Service;
