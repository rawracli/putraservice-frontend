import { VscQuote } from "react-icons/vsc";
import Stars from "../Stars";
import Profile from "../../../assets/Home/profile.webp";

const Testimoni = (props) => {
  const {rating, description, name, date, avatar} = props;

  return (
      <div className="mx-7 my-3 flex h-full min-w-40 flex-col pb-5">
        <div className="flex-1 flex flex-col justify-evenly">
          <VscQuote className="text-[#A4161A] size-7" />
          <Stars
            style={{ height: 33, width: 33 }}
            readonly={true}
            initialRating={rating}
          />
          <p className="leading-snug line-clamp-4 text-pretty">
            {description}
          </p>
        </div>
        <div className="flex py-3">
          <div
            className="size-11 rounded-full bg-cover mr-2"
            style={{ backgroundImage: `url('${avatar ? avatar : Profile}')` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-xs">{name}</h4>
            <h5 className="text-[#8B8B8B] text-[0.55rem]">{date}</h5>
          </div>
        </div>
      </div>
  );
};

export default Testimoni;
