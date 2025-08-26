import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Testimoni from "./Testimoni";

const EmblaCarousel = ({data}) => {

  const [emblaRefTop] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      direction: "forward",
      stopOnInteraction: false,
      startDelay: 10,
      speed: 1,
    }),
  ]);
  const [emblaRefBottom] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      direction: "backward",
      stopOnInteraction: false,
      startDelay: 10,
      speed: 1,
    }),
  ]);

  const testimonialLength = data.length;
  const testimonialMid = Math.round(testimonialLength / 2);
  const testimonialsForward = data.slice(0, testimonialMid);
  const testimonialsBackward = data.slice(
    testimonialMid,
    testimonialLength
  );

  return (
    <div className="bg-[#A20000] grid grid-rows-2 gap-6 overflow-hidden py-9">
      <div
        className="overflow-hidden mx-auto flex items-center justify-center"
        ref={emblaRefTop}
      >
        <div className="flex">
          {testimonialsForward.map((testimonial, index) => (
            <div
              className="flex-[0_0_24%] font-inter mr-5 rounded-3xl w-full h-66 bg-white"
              key={testimonial.id || index}
            >
              <Testimoni
                name={testimonial.name}
                date={testimonial.updated_at}
                description={testimonial.komentar}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="overflow-hidden mx-auto flex items-center justify-center"
        ref={emblaRefBottom}
      >
        <div className="flex">
          {testimonialsBackward.map((testimonial, index) => (
            <div
              className="flex-[0_0_24%] font-inter ml-5 rounded-3xl w-full h-66 bg-white"
              key={testimonial.id || index}
            >
              <Testimoni
                name={testimonial.name}
                date={testimonial.updated_at}
                description={testimonial.komentar}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
