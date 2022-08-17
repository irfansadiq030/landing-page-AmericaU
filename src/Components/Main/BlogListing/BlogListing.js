import React from 'react'
import MobileHeader from '../MobileHeader/MobileHeader'
import './BlogListing.css'
import PageTitle from '../MeetHeroes/PageTitle/PageTitle'

const blogData = [
    {
        id: 1,
        title: 'Blog Title 1',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: '4-29 heroes news.png',
        blogDate: 'APR 1, 2022'
    },
    {
        id: 2,
        title: 'Blog Title 2',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'slide - hero of the week - master dreamyearth.png',
        blogDate: 'MAR 13 2022'
    },
    {
        id: 3,
        title: 'Blog Title 3',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'Week 1 Story 2.png',
        blogDate: 'APR,16 2022'
    },
    {
        id: 4,
        title: 'Blog Title 4',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'Heroes News copy.png',
        blogDate: 'MAY 23, 2022'
    },
    {
        id: 5,
        title: 'Blog Title 5',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'slide - hero of the week - master dreamyearth.png',
        blogDate: 'JUN 15, 2022'
    },
    {
        id: 6,
        title: 'Blog Title 6',
        description: 'At first, the Shattered Sun’s forces will be limited as you help them resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort advancement depends on your whole realm completing quests and aiding the efforts—so be sure to do your part! As your realm continues to assist',
        img: 'Heroes News copy.png',
        blogDate: 'JULY 18, 2022'
    },
]

const BlogListing = () => {
    return (
        <div className='blogList-container'>
            <MobileHeader />
            <PageTitle title="Blog" />
            <div className="blogCard-container">
                {
                    blogData.map((blog) => {
                        return (
                            <div className="blogcard">
                                <div className="blog-img-container">
                                    <img className='bloListing-thumbnail' src={`images/${blog.img}`} alt="blog thumbnail" />
                                </div>
                                <div className="blogContent-container">
                                    <h1 className="blogListing-title">{blog.title}</h1>
                                    <p className="blog-date">{blog.blogDate} </p>
                                    <p className="blog-description">
                                        {blog.description}
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

export default BlogListing
