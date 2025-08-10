
import Profile from "../assets/profile.png";
import Stars from "../components/Home/Stars.jsx"

function Review({ starsStyle }) {
  return (
    <div className="flex items-center rounded-lg bg-white/80 w-83 h-27 mr-11">
      <img src={Profile} alt="" className="mt-2 mr-4 ml-7 w-18" />
      <div className="flex flex-col h-full py-1">
        {Stars({ style: starsStyle, readonly: true, initialRating: 4 })}
        <div className="pl-1">
          <div className="py-0.5">
            <h3 className="pt-1 pb-1 text-sm font-semibold leading-2">
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
