import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Testimoni from "./Testimoni";

const EmblaCarousel = () => {
  const testimonials = [
    {
      name: "Nanami",
      updated_at: "Just Now",
      komentar:
        "Pelayanan memuaskan, harga bersaing, dan penanganan cepat. Sangat kami rekomendasikan.",
      rating: 3,
    },
    {
      name: "Nanami",
      updated_at: "Just Now",
      komentar:
        "Pelayanan memuaskan, harga bersaing, dan penanganan cepat. Sangat kami rekomendasikan.",
      rating: 3,
    },
    {
      name: "Nanami",
      updated_at: "Just Now",
      komentar:
        "Pelayanan memuaskan, harga bersaing, dan penanganan cepat. Sangat kami rekomendasikan.",
      rating: 3,
    },
    {
      name: "Nanami",
      updated_at: "Just Now",
      komentar:
        "Pelayanan memuaskan, harga bersaing, dan penanganan cepat. Sangat kami rekomendasikan.",
      rating: 3,
    },
    {
      name: "Nanami",
      updated_at: "Just Now",
      komentar:
        "Pelayanan memuaskan, harga bersaing, dan penanganan cepat. Sangat kami rekomendasikan.",
      rating: 3,
    },
    {
      name: "Nanami",
      updated_at: "Just Now",
      komentar:
        "Pelayanan memuaskan, harga bersaing, dan penanganan cepat. Sangat kami rekomendasikan.",
      rating: 3,
    },
    {
      name: "John",
      updated_at: "2 days ago",
      komentar: "Great service and friendly staff. Highly recommended!",
      rating: 5,
    },
    {
      name: "John",
      updated_at: "2 days ago",
      komentar: "Great service and friendly staff. Highly recommended!",
      rating: 5,
    },
    {
      name: "John",
      updated_at: "2 days ago",
      komentar: "Great service and friendly staff. Highly recommended!",
      rating: 5,
    },
    {
      name: "John",
      updated_at: "2 days ago",
      komentar: "Great service and friendly staff. Highly recommended!",
      rating: 5,
    },
    {
      name: "John",
      updated_at: "2 days ago",
      komentar: "Great service and friendly staff. Highly recommended!",
      rating: 5,
    },
    {
      name: "John",
      updated_at: "2 days ago",
      komentar: "Great service and friendly staff. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah",
      updated_at: "1 week ago",
      komentar: "Fast delivery and excellent quality.",
      rating: 4,
    },
    {
      name: "Sarahin",
      updated_at: "1 week ago",
      komentar: "Fast delivery and excellent quality.",
      rating: 4,
    },
  ];

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

  // return (
  //   <div className="overflow-hidden" ref={emblaRef}>
  //     <div className="flex [touch-action:pan-y_pinch-zoom] -ml-4">
  //       {slides.map((index) => (
  //         <div
  //           className="transform-none flex-[0_0_45%] min-w-0 pl-4"
  //           key={index}
  //         >
  //           <div className="shadow-[inset_0_0_0_2px_rgba(209,213,219,0.5)] rounded-[1.8rem] text-6xl font-semibold flex items-center justify-center h-[19rem] select-none">
  //             <span>{index + 1}</span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-[#A20000] grid grid-rows-2 gap-5 min-h-screen py-9">
      <div className="overflow-hidden mx-auto flex items-center justify-center" ref={emblaRefTop}>
        <div className="flex">
          {testimonialsForward.map((testimonial, index) => (
            <div
              className="flex-[0_0_24%] font-inter mr-5 rounded-3xl w-full h-66 bg-white"
              key={index}
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
     <div className="overflow-hidden mx-auto flex items-center justify-center" ref={emblaRefBottom}>
        <div className="flex">
          {testimonialsBackward.map((testimonial, index) => (
            <div
              className="flex-[0_0_24%] font-inter ml-5 rounded-3xl w-full h-66 bg-white"
              key={index}
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
