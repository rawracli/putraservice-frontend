function Service() {
  return (
    <div className="bg-[#660708] overflow-hidden relative h-100 md:h-112 flex items-center">
      <div className="flex-col flex justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="w-fit">
            <h2 className="my-5 text-white text-[0.85rem] sm:text-base lg:text-[1.6rem] ml-3 sm:ml-6 lg:ml-17 leading-6 sm:leading-7 lg:leading-8 text-shadow-lg">
              Tunggu apa lagi? Percayakan kebutuhan perawatan dan perbaikan AC
              Anda kepada tim yang berpengalaman dan terpercaya. Hubungi kami
              sekarang dan rasakan sendiri layanan cepat, rapi, dan bergaransi!
            </h2>
            <a href="https://wa.me/6281333330073"
                 target="_blank"
                 rel="noopener noreferrer" className="mt-6 ml-3 sm:ml-6 lg:ml-17 bg-white text-[1.2rem] text-red-900 font-semibold px-6 py-2 rounded-[0.4rem] shadow hover:bg-[#A30F00] active:bg-[#730B00] hover:text-white  transition border border-red-700">
              Pesan sekarang
            </a>
          </div>
        </div>
      </div>
      <div className="relative isolate flex justify-end w-full h-full">
        {/* size = 7.45 + value sebelumnya */}
        <div className="flex items-center justify-center h-full">
          <div className="absolute rounded-full z-10 bg-[#A4161A] size-[30rem] sm:size-[35rem] md:size-[40rem] lg:size-[50rem] xl:size-[55rem]"></div>
          <div className="absolute rounded-full z-20 bg-[#C51E21] size-[24rem] sm:size-[28rem] md:size-[34rem] lg:size-[40rem] xl:size-[44.1rem]"></div>
          <div className="absolute rounded-full z-30 bg-[#EB5353] size-[18rem] sm:size-[22rem] md:size-[28rem] lg:size-[32rem] xl:size-[33.95rem]"></div>
          <div className="absolute rounded-full z-40 bg-[#FF8080] size-[14rem] sm:size-[18rem] md:size-[22rem] lg:size-[25rem] xl:size-[26.45rem]"></div>
          <div className="absolute rounded-full z-50 bg-[#FFA9A9] size-[10rem] sm:size-[13rem] md:size-[16rem] lg:size-[18rem] xl:size-[19rem]"></div>
          <div className="absolute rounded-full z-60 bg-[#FED5D5] size-[6rem] sm:size-[8rem] md:size-[10rem] lg:size-[11rem] xl:size-[11.55rem]"></div>
        </div>
      </div>
    </div>
  );
}

export default Service;
