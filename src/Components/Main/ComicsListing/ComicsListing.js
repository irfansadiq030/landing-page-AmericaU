import React from 'react'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'
import './ComicsListing.css'
import { Link } from 'react-router-dom'

const comicsData = [
    {
        id: 1,
        title: 'Comics Title 1',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'cover.jpg',
        date: 'APR 1, 2022'
    },
    {
        id: 2,
        title: 'Comics Title 2',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'cover2.png',
        date: 'MAR 13 2022'
    },
    {
        id: 3,
        title: 'Comics Title 3',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'cover3.png',
        date: 'APR,16 2022'
    },
    {
        id: 4,
        title: 'Comics Title 4',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'cover.jpg',
        date: 'MAY 23, 2022'
    },
    {
        id: 5,
        title: 'Comics Title 5',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'cover2.png',
        date: 'JUN 15, 2022'
    },
]

const ComicsListing = () => {
    return (
        <div className='comics-container'>
            <MobileHeader />
            <PageTitle customColor="#FF8500" title="Comics" />
            {
                comicsData.map((comicData, index) => {
                    return (
                        <div className="comicsCard">
                            <div className="comics-img-container">
                                <img className='comicsListing-thumbnail' src={`images/${comicData.img}`} alt="blog thumbnail" />
                            </div>
                            <div className="comicsContent-container">
                                <Link className="comicsTitle-link" to="/comics"><h1 className="comicsListing-title">{comicData.title}</h1></Link>
                                <p className="blog-date">{comicData.date} </p>
                                <p className="comics-description">
                                    {
                                        comicData.description
                                    }
                                </p>
                            </div>
                        </div>
                    )
                })
            }
            <div className="blog-pagintaion">
                <img className='blog-left-arrow' src="images/blog-left-arrow.png" alt="" />
                <img className='blog-right-arrow' src="images/blog-right-arrow.png" alt="" />
            </div>

        </div>
    )
}

export default ComicsListing
