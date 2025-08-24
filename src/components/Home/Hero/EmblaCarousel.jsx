import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Stars from "../Stars";
import Profile from "../../../assets/Home/profile.webp";

const EmblaCarousel = ({data}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="m-auto max-w-60 md:max-w-70 lg:max-w-83">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-1">
          {data.map((testimonial, index) => (
            <div
              className="flex-[0_0_100%] flex items-center rounded-lg bg-white/80 w-60 md:w-70 lg:w-83 h-27 sm:mr-7 mr-11"
              key={testimonial.id || index}
            >
              <div className="mt-1 ml-4 mr-3 md:mt-2 md:mr-4 md:ml-7 size-14 md:size-18">
                <img
                src={testimonial.avatar ? testimonial.avatar : Profile}
                alt="profile"
                className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col h-full py-1">
                {Stars({
                  style: { height: "25px", width: "23px", marginRight: "3px" },
                  readonly: true,
                  initialRating: testimonial.rating,
                })}
                <div className="pl-1">
                  <div className="py-0.5">
                    <h3 className="pt-1 pb-1 text-[0.8rem] md:text-sm font-semibold leading-2">
                      {testimonial.name}
                    </h3>
                    <h5 className="text-[9px] font-light text-[#494949]">
                      {testimonial.updated_at}
                    </h5>
                  </div>
                  <p className="text-[10px] leading-3 md:leading-4 text-balance line-clamp-2">
                    {testimonial.komentar}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
