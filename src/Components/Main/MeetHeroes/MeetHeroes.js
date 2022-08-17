import React from 'react'
import './MeetHeroes.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from './PageTitle/PageTitle'
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
    return (
        <div className='meetHeroes-container'>
            <MobileHeader />
            <PageTitle title="Meet the Heroes" />
            <img className='meetHeroes-main-img' src="images/vector.png" alt="" />
            <div className="heroes-data-container">
                {
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
                }



            </div>
        </div >
    )
}

export default MeetHeroes
