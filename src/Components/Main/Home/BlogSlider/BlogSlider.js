import React, { useState } from "react";
import "./BlogSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { getBlog } from "../../../../store/slices/blog";
import { imagesBase } from "../../../../services/api";
import { formateDate } from "../../../Shared/dateformater";
import { Link } from "react-router-dom";

const BlogSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Fetching data
  const blogs = useSelector(getBlog);

  const sortedBlogs = [...blogs].sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.c_time).getTime() - new Date(a.c_time).getTime();
  });

  return (
    <>
      <div className="blog-container">
        <div className="left-arrow-container">
          <img
            className="slider-arrow"
            onClick={sliderRef?.slickPrev}
            src="/images/icon-back.png"
            alt=""
          />
        </div>

        <Slider ref={setSliderRef} {...settings}>
          {blogs.map((blog) => (
            <div className="blog-box">
              <Link to="/blog/blog-detail" state={{ ...blog }}>
                <img
                  className="blog-img"
                  src={imagesBase + blog.theme_img}
                  alt=""
                />

                <div className="blog-content-container">
                  <span className="blog-date">{formateDate(blog.c_time)}</span>
                  <h1 className="blog-title">{blog.title}</h1>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        <div className="right-arrow-container">
          <img
            className="slider-arrow"
            onClick={sliderRef?.slickNext}
            src="/images/icon-next.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BlogSlider;
