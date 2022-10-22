import React from 'react'
import './BlogDetail.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { imagesBase } from '../../../services/api';
import dayjs from 'dayjs'

const BlogDetail = () => {
    const { state: post } = useLocation();
    const nav = useNavigate()

    if (post == null) {
        return <Navigate to={"/blog"} />
    }

    console.log(post);
    return (
        <div className='blogDetail-container'>
            <MobileHeader />
            <img className='back-btn' alt='back button' src="images/blog-left-arrow.png" onClick={() => nav("/blog")} />

            <img className='blogDetail-main-img' src={imagesBase + post.theme_img} alt={post.title} />
            <h1 className='blogDetail-title'>{post.title}</h1>
            <div className="blog-meta-container">
                <span>Date: {dayjs(post.c_time).format("MMM DD, YYYY")} |</span>
                <span>Category: {post.kind} |</span>
                <span>Posted By: {post.author} </span>
            </div>
            <div className="blogDetail-content-container">
                <div className="blog_txt_container" dangerouslySetInnerHTML={{ __html: post.content }}>

                </div>

            </div>
            <div className="blogComment-container">
                <h2 className="commentsCount">2 Comments</h2>
                <form action="/" className="commentForm">
                    <textarea id="" cols="320" rows="7" className='commentfield'></textarea>
                    <button className='addComment-btn'>Add Comment</button>
                </form>
                {/* Comment List */}
                <div className="commentList-container">
                    <div className="commentDetail-container">
                        <div className="commenter-info">
                            <div className="commentor-imgContainer">
                                <img src='' className="commentor-img" alt='' />
                            </div>
                            <span className='comment-time'>18,976 days</span>
                        </div>
                        <div className="commentData">
                            <h3 className="commentor-name">Wise Grandmoney</h3>
                            <p className='actual-comment'>Hello, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, repudiandae?</p>
                        </div>

                    </div>
                    <div className="commentDetail-container">
                        <div className="commenter-info">
                            <div className="commentor-imgContainer">
                                <img src='' className="commentor-img" alt='' />
                            </div>
                            <span className='comment-time'>18,976 days</span>
                        </div>
                        <div className="commentData">
                            <h3 className="commentor-name">Wise Grandmoney</h3>
                            <p className='actual-comment'>Hello, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, repudiandae?</p>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default BlogDetail
