import { VscQuote } from "react-icons/vsc";
import Stars from "../Stars";
import Profile from "../../../assets/Home/profile.png";

const Testimoni = (props) => {
  const {rating, description, name, date} = props;

  return (
      <div className="mx-7 my-3 flex h-full flex-col pb-5">
        <div className="flex-1 flex flex-col justify-evenly">
          <VscQuote className="text-[#A4161A] size-7" />
          <Stars
            style={{ height: 33, width: 33 }}
            readonly={true}
            initialRating={rating}
          />
          <p className="leading-snug">
            {description}
          </p>
        </div>
        <div className="flex py-3">
          <div
            className="size-11 rounded-full bg-cover mr-2"
            style={{ backgroundImage: `url(${Profile})` }}
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
