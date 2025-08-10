import { Link } from "react-router-dom";

const Layanan = ({image, title, description, className = ""}) => {
  return (
    <div className="bg-gradient-to-l from-[#E11500] via-[#A30F00] to-[#730B00] flex-1 flex">
      <div className="items-center justify-center flex py-5 pl-15 pr-13">
        <div className="bg-white size-20 rounded-full flex items-center justify-center">
          <img src={image} alt="" className={`w-11 ${className}`} />
        </div>
      </div>
      <div className="text-white flex flex-col w-[calc(100%-14rem)] relative">
        <h4 className="text-[clamp(1rem,2vw,1.5rem)] font-bold pt-1.5">
          {title}
        </h4>
        <p className="text-[clamp(6px,2vw,14px)] font-inter leading-snug tracking-wide font-light text-[#D1D0CF]">
          {description}
        </p>
        <Link
          to={"/layanan"}
          className="text-[#BA181B] bg-white font-inter absolute bottom-3 right-0 text-xs font-semibold py-1.5 pl-4 pr-3 rounded-md"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default Layanan;