import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoscroll({ speed: 1 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div className="embla mt-8" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="img/Frame_1.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="img/Frame_2.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="img/Frame_3.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="img/Frame_4.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="img/Frame_5.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="img/Frame_6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
