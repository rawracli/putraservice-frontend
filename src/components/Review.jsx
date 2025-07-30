import { Rating } from "react-simple-star-rating";
import Profile from "../assets/profile.png";

function Stars({ style }) {
  // Catch Rating value
  return (
    <div className="App">
      <Rating
        initialValue={4.5}
        readonly={true}
        allowFraction={true}
        allowTitleTag={false}
        // horizontal stars
        emptyStyle={{ display: "flex" }}
        SVGstyle={{ display: "inline-block", marginBottom: 10, ...style }}
        style={{ marginBottom: -10 }}
      />
    </div>
  );
}

function Review({ starsStyle }) {
  return (
    <div className="bg-white/80 flex rounded-lg w-93 min-h-31 items-center">
      <img src={Profile} alt="" className="ml-7 mr-4 w-18" />
      <div className="flex flex-col h-full py-1">
        {Stars({ style: starsStyle })}
        <div className="pl-2">
          <div className="py-0.5">
            <h3 className="font-bold text-lg leading-5 pt-1">
              Budiono Siregar
            </h3>
            <h5 className="text-[9px] text-[#494949]">Maret 2025</h5>
          </div>
          <p className="text-[11px] leading-4">
            pelayanan nya rapih, cepat, dan memuaskan hasilnya
          </p>
        </div>
      </div>
    </div>
  );
}
export default Review;
