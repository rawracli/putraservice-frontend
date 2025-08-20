import Arrow from "../../../assets/Home/WhyChooseUs/arrow.webp";
import { Link } from 'react-router-dom';
import ArrowRight from "../../ArrowRight";
export default function Card({ image, title, description, className }) {
  return (
    <div className={`flex flex-col bg-white rounded-lg shadow-md shadow-black/25 pl-6 md:pl-10 pt-6 md:pt-10 pr-3 md:pr-5 w-full md:w-93 ${className}`}>
      <img src={image} alt="" className="w-16 md:w-23" />
      <h3 className="font-semibold text-lg md:text-[1.3rem] tracking-wide leading-6 pb-3 pt-4 md:pt-6">
        {title}
      </h3>
      <p className="tracking-wide font-poppins text-pretty text-[#484848] leading-relaxed text-sm md:text-base">
        {description}
      </p>
      {/* <Link className="flex items-end w-fit gap-4 md:gap-6 h-full font-semibold pb-6 md:pb-8 mt-auto text-sm md:text-base">
        Read More <img src={Arrow} alt="" className="h-[0.75rem] md:h-[0.95rem] m-1" />
      </Link> */}
      <Link to="/service" onClick={() => window.scrollTo(0, 0)} className="flex w-fit text-black pb-6 md:pb-8 mt-auto active:text-[#A30F00] transition hover:text-[#A30F00] group items-center gap-2 text-lg font-semibold">
        <p>Read More</p>
        <ArrowRight strokeWidth={1.3} className={"w-25 group-hover:w-30 transition-all h-10"}/>
      </Link>
    </div>
  );
}