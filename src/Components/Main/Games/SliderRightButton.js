import React from "react";
import { useSwiper } from "swiper/react";

export default function SliderRightButton() {
  const swiper = useSwiper();

  return (
    <img
      className="blog-right-arrow"
      src="images/blog-right-arrow.png"
      alt=""
      onClick={() => swiper.slideNext()}
    />
  );
}
