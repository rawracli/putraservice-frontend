
import Profile from "../assets/profile.png";
import Stars from "../components/Home/Stars.jsx"

function Review({ starsStyle }) {
  return (
    <div className="bg-white/80 flex rounded-lg w-83 h-27 mr-11 items-center">
      <img src={Profile} alt="" className="ml-7 mr-4 mt-2 w-18" />
      <div className="flex flex-col h-full py-1">
        {Stars({ style: starsStyle, readonly: true, initialRating: 4 })}
        <div className="pl-1">
          <div className="py-0.5">
            <h3 className="font-semibold text-sm leading-2 pb-1 pt-1">
              Budiyono Siregar
            </h3>
            <h5 className="text-[9px] font-light text-[#494949]">Maret 2025</h5>
          </div>
          <p className="text-[10px] leading-4 text-balance">
            pelayanan nya rapih, cepat, dan memuaskan hasilnya
          </p>
        </div>
      </div>
    </div>
  );
}
export default Review;
