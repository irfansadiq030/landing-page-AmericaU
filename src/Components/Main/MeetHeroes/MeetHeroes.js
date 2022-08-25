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
        img: 'Mental Ninja-min.png',
        youtubeVideoID: 'E3BncLoUEKE'
    },
    {
        img: 'Firewall-min.png',
        youtubeVideoID: 'HHpwbTQXky0'
    },
    {
        img: 'Gritster-min.png',
        youtubeVideoID: 'vXQZ9um5Ugo'
    },
    {
        img: 'Deep Blue-min.png',
        youtubeVideoID: 'azBYgcvt8Wk'
    },
    {
        img: 'Gold Angel-min.png',
        youtubeVideoID: 'l6IIiEtmiR0'
    },
    {
        img: 'CHANCHITO-min.png',
        youtubeVideoID: 'rZh9RvNGQWQ'
    },
    {
        img: 'Arkseed.png',
        youtubeVideoID: 'DWWmjrK6rvY'
    },
    {
        img: 'DENZILLION-min.png',
        youtubeVideoID: 'YjAaxCsZnsc'
    },
    {
        img: 'Count Dinero-min.png',
        youtubeVideoID: 'Sl9V96psMrY'
    },
    {
        img: 'DETECTIVE MR E-min.png',
        youtubeVideoID: 'Z2lw8jjry3M'
    },
    {
        img: 'KID EINSTEIN-min.png',
        youtubeVideoID: 'JuW25j47v-g'
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
        img: 'TRI-GUY-min.png',
        youtubeVideoID: 'Q16NBGy5JBI'
    },
    {
        img: 'IRON HAMMER AND THE YOUNG BUILDERS-min.png',
        youtubeVideoID: 'P2xWdL0FiP4'
    },
    {
        img: 'RE-PETE-min.png',
        youtubeVideoID: 'BpJ71LNZFhQ'
    },
    {
        img: 'BULLSEYE BOT-min.png',
        youtubeVideoID: 'xp9rA3iX4A4'
    },
    {
        img: 'KARMZAH-min.png',
        youtubeVideoID: 'kxth_-IGV0I'
    },
    {
        img: 'DEEDLES-min.png',
        youtubeVideoID: 'SC38A9LOaTc'
    },
    {
        img: 'MASTER HEARME LONGWIND-min.png',
        youtubeVideoID: 'zvuGO9BfrMA'
    },

]
// Heroes Names
const heroesNames = [
    'Dean Archer', 'Mental Ninja', 'Firewall', 'Gritster',
    'Deep Blue', 'Gold Angel', 'Chanchito', 'Arskeed',
    'Denzillion ', 'Count Dinero', 'Detective Mr. E', 'Kid Einstein', 'General Washington',
    'Mighty Chondrian', 'Tri-Guy', 'Iron Hammer & The Young Builders', 'Re-Pete', 'Bullseye Bot',
    'Karmzah ', 'Deedles ', 'Master Hearme Longwind'
];
const MeetHeroes = () => {
    const [heroName, setHeroName] = useState(true);
    const [sliderRef, setSliderRef] = useState(null);

    // Onclick any hero name slide to display function
    const slideGoto = (index) => {
        sliderRef?.slickGoTo(index)
    }

    const settings = {
        dots: false,
        customPaging: function (i) {
            return (
                <span>{heroesNames[i]} </span>
            );
        },
        // dotsClass: "slick-dots heroes-name-container",
        arrows: false,
        infinite: true,
        lazyLoad:'ondemand',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "20px",
        // responsive: [
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             dotsClass: "slick-dots fani mobile-heroNameContainer",
        //             dots: true,
        //         }
        //     },
        // ]

    };



    return (
        <div className='meetHeroes-container'>
            <MobileHeader />
            <PageTitle title="Meet the Heroes" />
            <img onClick={() => setHeroName(!heroName)} className='meetHeroes-main-img' src="images/vector.png" alt="" />
            <div className="heroName-container">
                {
                    heroesNames.map((name,index) => {
                        return (
                            <span onClick={()=>slideGoto(index)} className="heroName"> {name}   &nbsp; &nbsp;| </span>
                        )
                    })
                }

                {/* <span className="heroName">Irfan | </span> */}
            </div>
            <div className="heroes-data-container">
                <div className="left-arrow-container">
                    <img className='slider-arrow' onClick={sliderRef?.slickNext} src="images/icon-back.png" alt="" />
                </div>
                <Slider dots ref={setSliderRef} {...settings}>

                    {
                        heroesData.map((heroData, index) => {
                            return (
                                <div className="meetHeroes-slide" key={index}>
                                    <img className='heroes-img-collection' src={`images/meet-heroes/${heroData.img}`} alt="" />
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
