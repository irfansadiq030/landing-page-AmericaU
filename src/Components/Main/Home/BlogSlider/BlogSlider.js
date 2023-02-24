import React, { useState } from "react";
import "./BlogSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { getBlog } from "../../../../store/slices/blog";
import { imagesBase } from "../../../../services/api";
import { formateDate } from "../../../Shared/dateformater";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { useRef } from "react";
import { useCallback } from "react";

const BlogSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    centerPadding: "20px",
  };

  // Fetching data
  const blogs = useSelector(getBlog);

  const sortedBlogs = [...blogs].sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.c_time).getTime() - new Date(a.c_time).getTime();
  });

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  console.log(sortedBlogs[0]);

  return (
    <>
      <div className="blog-container">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1365: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          ref={sliderRef}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation]}
          className="mySwiper"
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          <img
            className="swiper-button-prev"
            ref={navigationPrevRef}
            onClick={sliderRef?.slickPrev}
            src="/images/icon-back.png"
            alt=""
          />

          {sortedBlogs.map((blog) => (
            <SwiperSlide key={blog?.id}>
              <div className="blog-box">
                <Link to="/blog/blog-detail" state={{ ...blog }}>
                  <img
                    className="blog-img"
                    src={imagesBase + blog.theme_img}
                    alt=""
                  />

                  <div className="blog-content-container">
                    <span className="blog-date">
                      {formateDate(blog.c_time)}
                    </span>
                    <h1 className="blog-title">{blog.title}</h1>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          <img
            className="swiper-button-next"
            ref={navigationNextRef}
            onClick={sliderRef?.slickNext}
            src="/images/icon-next.png"
            alt=""
          />
        </Swiper>
      </div>
    </>
  );
};

export default BlogSlider;
