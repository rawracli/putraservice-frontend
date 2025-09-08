'use client';
import Lanyard from "../../../assets/Home/Guarantee/Lanyard/Lanyard.webp"
function Guarantee() {

  return (
    <section className="relative flex flex-col md:flex-row min-h-[95svh] items-center justify-end md:justify-center font-semibold overflow-hidden font-inter">
      <div className="h-30"></div>
      <h2 className="text-[3rem] sm:text-[4.7rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] tracking-[0.016em] pt-30 md:pt-0 pr-1 sm:pr-1.5 md:pr-1.5 lg:pr-3">BERGARANSI</h2>
      <div className="relative flex flex-col md:flex-row items-center">
        <h5 className="text-[#A20000] shadow-black md:translate-y-10 md:drop-shadow-md md:text-shadow-[5px_2.5px_2px_rgba(0,_0,_0,_0.21)] text-base sm:text-xl md:text-xl lg:text-xl pt-1.5 sm:pt-2 md:pt-2 lg:pt-2.5 xl:pt-[6.25rem]">
          <span className="hidden md:block">Selama</span><span className="md:hidden block">SELAMA</span>
        </h5>
        <h3 className="md:absolute leading-[17rem] md:translate-y-10 sm:leading-[18rem] md:leading-[15rem] lg:leading-[18rem] xl:leading-[21rem] md:left-8 lg:left-10 md:-bottom-24 lg:-bottom-30 text-[#A20000] text-[19rem] sm:text-[21rem] md:text-[16rem] lg:text-[18rem] xl:text-[21rem] tracking-[-0.07em] md:text-shadow-[20px_10px_4px_rgba(0,_0,_0,_0.21)]">
          1<sup className="text-[3.4rem] sm:text-[4rem] md:text-[3.5rem] lg:text-[4rem] text-shadow-none -top-56 sm:-top-57 md:-top-48 lg:-top-57">*</sup>
        </h3>
      </div>
      <h4 className=" md:pl-12 lg:pl-24 xl:pl-28 pt-6 md:pt-10 lg:pt-12 xl:pt-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 md:pb-0">
        <span className="hidden md:block">Bulan</span><span className="md:hidden block">BULAN</span>
      </h4>
      <img src={Lanyard} alt="guarantee" className="absolute -top-13  md:-top-20 md:right-0 h-80 lg:h-100" />
    </section>
  );
}

export default Guarantee;