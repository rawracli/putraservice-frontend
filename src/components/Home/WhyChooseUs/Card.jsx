import Arrow from "../../../assets/Home/WhyChooseUs/arrow.png";
import { Link } from 'react-router-dom';

export default function Card({ image, title, description }) {
  return (
    <div className="h-99 w-93 flex flex-col bg-white rounded-lg shadow-md shadow-black/25 pl-10 pt-10 pr-5">
      <img src={image} alt="hai" className="w-23" />
      <h3 className="font-semibold text-[1.3rem] tracking-wide leading-13 pt-6">
        {title}
      </h3>
      <p className="tracking-wider font-poppins text-pretty text-[#484848] leading-relaxed">
        {description}
      </p>
      <Link className="flex items-end w-fit gap-6 h-full font-semibold pb-8">
        Read More <img src={Arrow} alt="" className="h-[0.95rem] m-1" />
      </Link>
    </div>
  );
}
