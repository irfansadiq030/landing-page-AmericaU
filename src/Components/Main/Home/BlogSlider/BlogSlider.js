import React, { useState } from 'react'
import './BlogSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { getBlog } from '../../../../store/slices/blog';
import { imagesBase } from '../../../../services/api';

const BlogSlider = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 2200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },



        ]
    };

    // Fetching data
    const blogs = useSelector(getBlog)
    // const latestBlogs = blogs.sort((a, b) => (a.c_time > b.c_time) ? 1 : -1)


    return (
        <>

            <div className="blog-container">
                <div className="left-arrow-container">
                    <img className='slider-arrow' onClick={sliderRef?.slickPrev} src="/images/icon-back.png" alt="" />
                </div>

                <Slider ref={setSliderRef} {...settings}>
                    {
                        blogs.slice(0, 7).map(blog => 
                        <div className="blog-box">
                                <img className='blog-img' src={imagesBase + blog.theme_img} alt="" />
                            <div className="blog-content-container">
                                <span className="blog-date">Apr 3, 2022</span>
                                    <h1 className="blog-title">{blog.title}</h1>
                            </div>
                        </div>
                        )
                    }
                    {/* <div className="blog-box">
                        <img className='blog-img' src="/images/Week 1 Story 2.png" alt="" />
                        <div className="blog-content-container">
                            <span className="blog-date">Apr 3, 2022</span>
                            <h1 className="blog-title">Season Pass Story Line 2!</h1>
                        </div>
                    </div>
                    <div className="blog-box">
                        <img className='blog-img' src="/images/Heroes News copy.png" alt="" />
                        <div className="blog-content-container">
                            <span className="blog-date">June 3, 2022</span>
                            <h1 className="blog-title">HAPPY ST. PATRICK’S DAY!</h1>
                        </div>
                    </div>
                    <div className="blog-box">
                        <img className='blog-img' src="/images/4-29 heroes news.png" alt="" />
                        <div className="blog-content-container">
                            <span className="blog-date">Apr 3, 2022</span>
                            <h1 className="blog-title">HEROES NEWS, NEW AVATARS!</h1>
                        </div>
                    </div>
                    <div className="blog-box">
                        <img className='blog-img' src="/images/slide - hero of the week - master dreamyearth.png" alt="" />
                        <div className="blog-content-container">
                            <span className="blog-date">Aug 3, 2022</span>
                            <h1 className="blog-title">Hero of the week Master PR...</h1>
                        </div>
                    </div>
                    <div className="blog-box">
                        <img className='blog-img' src="/images/slide - hero of the week - master dreamyearth.png" alt="" />
                        <div className="blog-content-container">
                            <span className="blog-date">Aug 3, 2022</span>
                            <h1 className="blog-title">Hero of the week Master PR...</h1>
                        </div>
                    </div> */}

                </Slider>

                <div className="right-arrow-container">
                    <img className='slider-arrow' onClick={sliderRef?.slickNext} src="/images/icon-next.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default BlogSlider
