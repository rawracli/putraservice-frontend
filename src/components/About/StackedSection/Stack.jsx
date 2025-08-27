import React from "react";
import Photo1 from "../../../assets/About/stack1.webp";
import Photo2 from "../../../assets/About/stack2.webp";
import Photo3 from "../../../assets/About/stack3.webp";
import ArrowRight from "../../ArrowRight";
import { Link } from "react-router-dom";

const stackedDesign = {
  photos: [Photo1, Photo2, Photo3],
  backgroundColor: ["#F6E6E6", "#FFD2D2", "#FFC4C4"],
  numberColor: ["#E5BBBA", "#D4ADAD", "#E4A7A8"]
}
function Stack({ title, description, number, link = false }) {
  return (
    <li
      className="sticky top-0"
      style={{
        paddingTop: `calc(var(--index) * var(--cardTopPadding))`,
      }}
    >
      <section
        className="card-body box-border shadow-[0_0_30px_rgba(0,0,0,0.3)] flex transition-all duration-500"
        style={{
          height: `var(--cardHeight)`,
          backgroundColor: `${stackedDesign.backgroundColor[number]}`
        }}
      >
        <div className="flex-1 overflow-y-scroll no-scrollbar h-full px-[clamp(0.5rem,6vw,4.75rem)] pt-4 md:pt-27" style={{}}>
          <div className="relative h-[42svh] rounded-4xl overflow-hidden block md:hidden">
            <h3 className="absolute left-5 top-2 mix-blend-difference text-white text-7xl pb-7">0{number+1}</h3>
            <img src={stackedDesign.photos[number]} className="size-full object-cover" alt="" />
          </div>
          <div className="">
            <h3 className="hidden md:block text-9xl pb-7" style={{color: stackedDesign.numberColor[number]}}>0{number+1}</h3>
            <h3 className="font-semibold text-[#660708] text-[1.5rem] md:text-[2.6rem] py-4 md:pt-0 md:pb-7 leading-8 sm:leading-12 md:leading-13">
              {title}
            </h3>
            <p className=" pb-2 font-poppins leading-[1.3rem] text-[0.8rem] md:leading-normal md:text-base text-[#A20000]">{description}</p>
          </div>
          {link && (
          <Link to="/layanan" onClick={() => window.scrollTo(0, 0)} className="flex w-fit text-white active:text-[#A30F00] transition hover:text-[#A30F00] group items-center gap-2 text-lg font-semibold">
            <p className="font-poppins">Cek Detail Harga</p>
            <ArrowRight strokeWidth={1.3} className={"w-25 group-hover:w-30 transition-all h-10"}/>
          </Link>
          )}
        </div>
        <div className="basis-[33.2%] hidden md:block">
          <img src={stackedDesign.photos[number]} className="h-full object-cover" alt="" />
        </div>
      </section>
    </li>
  );
}

export default Stack;
