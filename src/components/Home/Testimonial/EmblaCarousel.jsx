import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Testimoni from "./Testimoni";
import ReviewController from "../../../controllers/ReviewController";

const EmblaCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Ambil data review dari API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await ReviewController.show(); // Kita perlu tambahkan fungsi show di controller frontend

        let filledTestimonials = [...res];
        const len = filledTestimonials.length;

        if (len > 0 && len < 12) {
          while (filledTestimonials.length < 12) {
            filledTestimonials.push(
              res[filledTestimonials.length % len]
            );
          }
        }
        
        setTestimonials(filledTestimonials);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, []);

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

  const testimonialLength = testimonials.length;
  const testimonialMid = Math.round(testimonialLength / 2);
  const testimonialsForward = testimonials.slice(0, testimonialMid);
  const testimonialsBackward = testimonials.slice(
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
