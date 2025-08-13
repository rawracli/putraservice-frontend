function Service() {
  return (
    <div className="bg-[#660708] overflow-hidden relative h-112 flex items-center">
      <div className="flex-col flex justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="w-214">
            <h2 className="text-white text-[1.6rem] ml-17 leading-8">
              Tunggu apa lagi? Percayakan kebutuhan perawatan dan perbaikan AC
              Anda kepada tim yang berpengalaman dan terpercaya.
              <br />
              Hubungi kami sekarang dan rasakan sendiri layanan cepat, rapi, dan
              bergaransi!
            </h2>
            <button className="mt-6 ml-17 bg-white text-[1.2rem] text-red-900 font-semibold px-6 py-2 rounded-[0.4rem] shadow hover:bg-gray-100 transition border border-red-700">
              Pesan sekarang
            </button>
          </div>
        </div>
      </div>
      <div className=" relative flex items-center translate-x-10 -right-20 isolate justify-center w-full h-122">
        {/* size = 7.45 + value sebelumnya */}
        <div className="absolute size-[55rem] z-10 rounded-full bg-[#A4161A]"></div>
        <div className="absolute size-[44.1rem] z-20 rounded-full bg-[#C51E21]"></div>
        <div className="absolute size-[33.95rem] z-30 rounded-full bg-[#EB5353]"></div>
        <div className="absolute size-[26.45rem] z-40 rounded-full bg-[#FF8080]"></div>
        <div className="absolute size-[19rem] z-50 rounded-full bg-[#FFA9A9]"></div>
        <div className="absolute size-[11.55rem] z-60 rounded-full bg-[#FED5D5]"></div>
      </div>
    </div>
  );
}

export default Service;
