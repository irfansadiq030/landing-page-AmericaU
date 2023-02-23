import React from "react";
import { useSwiper } from "swiper/react";

export default function SliderLeftButton() {
  const swiper = useSwiper();

  return (
    <img
      onClick={() => swiper.slidePrev()}
      className="blog-left-arrow"
      src="images/blog-left-arrow.png"
      alt=""
    />
  );
}
