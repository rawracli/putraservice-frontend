import { Link } from "react-router-dom";

const Layanan = ({image, title, description, className = ""}) => {
  return (
    <div className="bg-gradient-to-l from-[#E11500] via-[#A30F00] to-[#730B00] min-h-35 flex">
      <div className="items-center justify-center flex py-5 sm:pl-12 sm:pr-9 pl-5 pr-5">
        <div className="bg-white size-16 sm:size-20 rounded-full flex items-center justify-center">
          <img src={image} alt="" className={`w-9 sm:w-11 ${className}`} />
        </div>
      </div>
      <div className="text-white flex flex-1 flex-col relative py-1.5 pr-1.5 justify-between">
        <div>
        <h4 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold ">
          {title.replace(/(?!^)(?<!A)([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
        </h4>
        <p className="text-[clamp(12px,2vw,14px)] font-inter leading-snug tracking-normal font-light text-[#D1D0CF] pr-2">
          {description}
        </p>
        </div>
        <Link
          to={`/layanan?category=${title}`}
          onClick={() => {window.scrollTo(0, 0)}}
          className="text-[#BA181B] bg-white font-inter mt-1.5 self-end w-fit sm:absolute bottom-3 right-3 text-[0.6rem] sm:text-xs font-semibold py-1 px-2 sm:py-1.5 sm:pl-4 sm:pr-3 rounded-md"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default Layanan;