import React, { useState } from 'react'
import './MeetHeroes.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from './PageTitle/PageTitle'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const heroesData = [
    {
        img: 'KID EINSTEIN-min.png',
        youtubeVideoID: 'JuW25j47v-g'
    },
    {
        img: 'DETECTIVE MR E-min.png',
        youtubeVideoID: 'Z2lw8jjry3M'
    },
    {
        img: 'CHANCHITO-min.png',
        youtubeVideoID: 'rZh9RvNGQWQ'
    },
    {
        img: 'IRON HAMMER AND THE YOUNG BUILDERS-min.png',
        youtubeVideoID: 'P2xWdL0FiP4'
    },
    {
        img: 'DEEDLES-min.png',
        youtubeVideoID: 'SC38A9LOaTc'
    },
    {
        img: 'TRI-GUY-min.png',
        youtubeVideoID: 'Q16NBGy5JBI'
    },
    {
        img: 'GENERAL WASHINGTON-min.png',
        youtubeVideoID: 'ByUKbYvWa48'
    },
    {
        img: 'MIGHTY CHONDRIAN-min.png',
        youtubeVideoID: '5P9IJo34dQw'
    },
    {
        img: 'DENZILLION-min.png',
        youtubeVideoID: 'YjAaxCsZnsc'
    },
    {
        img: 'BULLSEYE BOT-min.jpg',
        youtubeVideoID: 'xp9rA3iX4A4'
    },
    {
        img: 'MASTER HEARME LONGWIND-min.png',
        youtubeVideoID: 'zvuGO9BfrMA'
    },
    {
        img: 'Arkseed.png',
        youtubeVideoID: 'DWWmjrK6rvY'
    },
    {
        img: 'Gold Angel-min.png',
        youtubeVideoID: 'l6IIiEtmiR0'
    },
    {
        img: 'Count Dinero-min.png',
        youtubeVideoID: 'Sl9V96psMrY'
    },
    {
        img: 'Deep Blue-min.png',
        youtubeVideoID: 'azBYgcvt8Wk'
    },
    {
        img: 'Gritster-min.png',
        youtubeVideoID: 'vXQZ9um5Ugo'
    },
    {
        img: 'Firewall-min.png',
        youtubeVideoID: 'HHpwbTQXky0'
    },
    {
        img: 'Mental Ninja-min.png',
        youtubeVideoID: 'E3BncLoUEKE'
    },
]
const MeetHeroes = () => {
    const [sliderRef, setSliderRef] = useState(null)
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
        // responsive: [
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             initialSlide: 1
        //         }
        //     },
        //     {
        //         breakpoint: 1440,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 2200,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1
        //         }
        //     },



        // ]
    };
    return (
        <div className='meetHeroes-container'>
            <MobileHeader />
            <PageTitle title="Meet the Heroes" />
            <img className='meetHeroes-main-img' src="images/vector.png" alt="" />
            <div className="heroes-data-container">
                {/* {
                    heroesData.map((heroData, index) => {
                        return (
                            <div key={index}>
                                <img loading="lazy" className='heroes-img-collection' src={`images/meet-heroes/${heroData.img}`} alt="" />
                                <div className="heroes-video">
                                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${heroData.youtubeVideoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        )
                    })
                } */}
                <div className="left-arrow-container">
                    <img className='slider-arrow' onClick={sliderRef?.slickNext} src="images/icon-back.png" alt="" />
                </div>
                <Slider dots ref={setSliderRef} {...settings}>
                    {/* <div className="meetHeroes-slide">
                        <img loading="lazy" className='heroes-img-collection' src='images/meet-heroes/Firewall-min.png' alt="" />
                        <div className="heroes-video">
                            <iframe width="100%" height="100%" src='https://www.youtube.com/embed/Z2lw8jjry3M' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div> */}
                    {
                        heroesData.map((heroData, index) => {
                            return (
                                <div className="meetHeroes-slide" key={index}>
                                    <img loading="lazy" className='heroes-img-collection' src={`images/meet-heroes/${heroData.img}`} alt="" />
                                    <div className="heroes-video">
                                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${heroData.youtubeVideoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider >
                <div className="right-arrow-container meetheroes-slider-right-arrow">
                    <img className='slider-arrow' onClick={sliderRef?.slickPrev} src="images/icon-next.png" alt="" />
                </div>

            </div>
        </div >
    )
}

export default MeetHeroes
