import React, { useState } from 'react'
import MobileHeader from '../MobileHeader/MobileHeader'
import './BlogListing.css'
import PageTitle from '../PageTitle/PageTitle'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getBlog } from '../../../store/slices/blog';

import dayjs from 'dayjs'
import { imagesBase } from '../../../services/api'



const BlogListing = () => {
    const blog = useSelector(getBlog);
    const [page, setPage] = useState(1);
    // console.log(page);

    return (
        <div className='blogList-container'>
            <MobileHeader />
            <PageTitle title="Blog" />
            <div className="blog-cards-container">
                {
                    blog.slice((page - 1) * 6, page * 6).map((blogPost) => {
                        return (
                            <div className="blogcard">
                                <div className='blog-img-container'>
                                    <img className='blog-listing-thumbnail' src={imagesBase + blogPost.theme_img} alt={blogPost.title} />
                                </div>
                                <div className="blog-detail-container">
                                    <Link className="blogtitle-link" to="/blog-detail" state={{ ...blogPost }}><h1 className="blogListing-title">{blogPost?.title || "Titlte not found."}</h1></Link>
                                    <p className="blog-date">{dayjs(+blogPost.c_time).format("MMM DD, YYYY")} | {blogPost.author}</p>
                                    {/* <p className="blog-description">
                                        {blogPost?.content || "Description is not found"}
                                    </p> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="blog-pagintaion">
                <img className='blog-left-arrow' src="images/blog-left-arrow.png" onClick={() => setPage(prev => prev + 1)} alt="" />
                <img className='blog-right-arrow' src="images/blog-right-arrow.png" onClick={() => setPage(prev => prev - 1 > 0 ? prev - 1 : 1)} alt="" />
            </div>
        </div>
    )
}

export default BlogListing
