function Service() {
  return (
    <>
      <div className="bg-[#660708] relative h-112 flex items-center">
        <div className="flex-col flex justify-center ">
          <div className="container mx-auto px-4">
            <div className="w-214">
              <h2 className="text-white text-[1.6rem] ml-17 leading-8">
                Tunggu apa lagi? Percayakan kebutuhan perawatan dan perbaikan AC
                Anda kepada tim yang berpengalaman dan terpercaya.
                <br />
                Hubungi kami sekarang dan rasakan sendiri layanan cepat, rapi,
                dan bergaransi!
              </h2>
              <button className="mt-6 ml-17 bg-white text-[1.2rem] text-red-900 font-semibold px-6 py-2 rounded-[0.4rem] shadow hover:bg-gray-100 transition border border-red-700">
                Pesan sekarang
              </button>
            </div>
          </div>
        </div>
            <div className="absolute flex items-center translate-x-10 right-0 justify-center z-10 w-full h-122">

            <div className="absolute h-[918px] w-[918px]  rounded-full bg-red-500"></div>
            <div className="absolute h-[586px] w-[586px]  rounded-full bg-red-400"></div>
            <div className="absolute h-[742px] w-[742px]  rounded-full bg-red-300"></div>
            <div className="absolute h-[652px] w-[652px]  rounded-full bg-red-200"></div>
            <div className="absolute h-[327px] w-[327px]  rounded-full bg-red-100"></div>
            <div className="absolute h-[200px] w-[200px]  rounded-full bg-white"></div>
            </div>
      </div>
    </>
  );
}

export default Service;
