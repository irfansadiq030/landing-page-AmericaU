import React from 'react'
import './SeasonPassStories.css'
import { Link } from 'react-router-dom'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'

// Dummy Data
const seasonStories = [
    {
        id: 1,
        title: 'Slide Title 1',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: '4-29 heroes news.png',
        blogDate: 'APR 1, 2022'
    },
    {
        id: 2,
        title: 'Slide Title 2',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'slide - hero of the week - master dreamyearth.png',
        blogDate: 'MAR 13 2022'
    },
    {
        id: 3,
        title: 'Slide Title 3',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'Week 1 Story 2.png',
        blogDate: 'APR,16 2022'
    },
    {
        id: 4,
        title: 'Slide Title 4',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'Heroes News copy.png',
        blogDate: 'MAY 23, 2022'
    },
    {
        id: 5,
        title: 'Slide Title 5',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'slide - hero of the week - master dreamyearth.png',
        blogDate: 'JUN 15, 2022'
    },
    {
        id: 6,
        title: 'Slide Title 6',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'Heroes News copy.png',
        blogDate: 'JULY 18, 2022'
    },
]

const SeasonPassStories = () => {
    return (
        <div className='seasonPs-container'>
            <MobileHeader />
            <PageTitle customColor="#FF8500" title="Season pass Stories" />
            <div className="blogCard-container">
                {
                    seasonStories.map((season) => {
                        return (
                            <div className="blogcard">
                                <div className="blog-img-container">
                                    <img className='bloListing-thumbnail' src={`images/${season.img}`} alt="blog thumbnail" />
                                </div>
                                <div className="blogContent-container">
                                    <Link className="blogtitle-link" to="/seasonpass-list"><h1 className="blogListing-title">{season.title}</h1></Link>
                                    <p className="blog-date">{season.blogDate} </p>
                                    <p className="blog-description">
                                        {season.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="blog-pagintaion">
                <img className='blog-left-arrow' src="images/blog-left-arrow.png" alt="" />
                <img className='blog-right-arrow' src="images/blog-right-arrow.png" alt="" />
            </div>
        </div>
    )
}

export default SeasonPassStories
