import React from 'react'
import MobileHeader from '../MobileHeader/MobileHeader'
import './BlogListing.css'
import PageTitle from '../MeetHeroes/PageTitle/PageTitle'

const BlogListing = () => {
    return (
        <div className='blogList-container'>
            <MobileHeader />
            <PageTitle title="Blog" />
            <div className="blogCard-container">
                <div className="blogcard">
                    <div className="blog-img-container">
                        <img className='bloListing-thumbnail' src="images/Heroes News copy.png" alt="blog thumbnail" />
                    </div>
                    <div className="blogContent-container">
                        <h1 className="blogListing-title">Blog Title 1</h1>
                        <p className="blog-date">Apr 1, 2022 </p>
                        <p className="blog-description">
                        At first, the Shattered Sun’s forces will be limited as you help them 
                        resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort 
                        advancement depends on your whole realm completing quests and aiding the 
                        efforts—so be sure to do your part! As your realm continues to assist ...

                        </p>
                    </div>
                </div>
                <div className="blogcard blogcard2">
                    <div className="blog-img-container">
                        <img className='bloListing-thumbnail' src="images/Week 1 Story 2.png" alt="blog thumbnail" />
                    </div>
                    <div className="blogContent-container">
                        <h1 className="blogListing-title">Blog Title 2</h1>
                        <p className="blog-date">March 1, 2022 </p>
                        <p className="blog-description">
                        At first, the Shattered Sun’s forces will be limited as you help them 
                        resist the Legion’s unrelenting assault. The Isle of Quel’Danas effort 
                        advancement depends on your whole realm completing quests and aiding the 
                        efforts—so be sure to do your part! As your realm continues to assist ...

                        </p>
                    </div>
                </div>
            </div>
            <div className="blog-pagintaion">
                <img className='blog-left-arrow' src="images/blog-left-arrow.png" alt="" />
                <img className='blog-right-arrow' src="images/blog-right-arrow.png" alt="" />
            </div>
        </div>
    )
}

export default BlogListing
