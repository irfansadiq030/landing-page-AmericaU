import React, { useState } from 'react'
import './News.css';
import MobileHeader from '../MobileHeader/MobileHeader';
import PageTitle from '../PageTitle/PageTitle';
import Slider from "react-slick";

const News = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "20px",
        vertical: true
    };

    // Mobile Slider Settings
    const [mobileSliderRef, setMobileSliderRef] = useState(null)
    const mobileSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
    };

    return (
        <div className='newsPage-container'>
            <MobileHeader />
            <PageTitle title="News" />
            <div className="newspg-main">
                <div className="newspg-content-container">
                    <div className="newspg-main-imgcontainer">
                        <img className='newspg-main-img' src="images/chinese new year.jpg" alt="news main thumbnail" />
                    </div>
                    <div className="newspg-description-container">
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                    </div>
                </div>
                <div className="moreNews-sidebar-container">
                    <img onClick={sliderRef?.slickNext} className='moreNews-topIcon' src="images/icon-back.png" alt="" />
                    <img className='moreNews-sidebar-img' src="images/moreNewsSidebar.png" alt="" />
                    <div className="moreNews-listContainer">

                        <h3 className="morenews-title">More</h3>
                        <div className="moreNewsitemContainer">
                            <Slider ref={setSliderRef} {...settings}>
                                <div className="moreNews-item">
                                    <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                                </div>
                                <div className="moreNews-item">
                                    <img className='moreNewsImg' src="images/Heroes News copy.png" alt="" />
                                </div>
                                <div className="moreNews-item">
                                    <img className='moreNewsImg' src="images/slide - hero of the week - master dreamyearth.png" alt="" />
                                </div>
                                <div className="moreNews-item">
                                    <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                                </div>
                                <div className="moreNews-item">
                                    <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                                </div>
                                <div className="moreNews-item">
                                    <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <img onClick={sliderRef?.slickPrev} className='moreNews-backIcon' src="images/icon-back.png" alt="" />
                </div>

                {/* More News Mobile Slider */}
                <div className="mobile-moreNews-slider">
                    <img onClick={mobileSliderRef?.slickNext} className='moreNews-sidePrevIcon' src="images/icon-back.png" alt="" />
                    <img className='moreNews-slider-img' src="images/moreNews-bg.png" alt="" />
                    <div className="moblNewsSliderContainer">

                        <Slider ref={setMobileSliderRef} {...mobileSettings}>
                            <img className='mobileSlide-newsImg' src="images/4-29 heroes news.png" alt="" />
                            <img className='mobileSlide-newsImg' src="images/4-29 heroes news.png" alt="" />
                            <img className='mobileSlide-newsImg' src="images/4-29 heroes news.png" alt="" />
                            <img className='mobileSlide-newsImg' src="images/4-29 heroes news.png" alt="" />
                        </Slider>
                    </div>
                    <img onClick={mobileSliderRef?.slickPrev} className='moreNews-sideNxtIcon' src="images/icon-back.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default News
