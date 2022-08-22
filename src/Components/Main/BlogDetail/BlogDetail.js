import React from 'react'
import './BlogDetail.css'
import MobileHeader from '../MobileHeader/MobileHeader'

const BlogDetail = () => {
    return (
        <div className='blogDetail-container'>
            <MobileHeader />
            <img className='blogDetail-main-img' src="images/blog Detail.png" alt="" />
            <h1 className='blogDetail-title'>Blog Title</h1>
            <div className="blog-meta-container">
                <span>Date |</span>
                <span>Category |</span>
                <span>Posted By </span>
            </div>
            <div className="blogDetail-content-container">
                <div className="blog_txt_container">
                    <p>Have you ever heard the saying, “if you don’t have anything nice to say,
                        don’t say anything at all?”</p>
                    <p>The opposite is true too. If you have something nice to say,
                        you should say it! Everyone likes to get a compliment, and it can feel just as good to give one too.
                        If you see someone who looks cool in their new hat,
                        tell them! If someone does something awesome, tell them!
                    </p>
                    <p>
                        <iframe className='videoIframe' height="400px" src="https://www.youtube.com/embed/Z2lw8jjry3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                    <p>Have you ever heard the saying, “if you don’t have anything nice to say,
                        don’t say anything at all?”</p>
                    <p>The opposite is true too. If you have something nice to say,
                        you should say it! Everyone likes to get a compliment, and it can feel just as good to give one too.
                        If you see someone who looks cool in their new hat,
                        tell them! If someone does something awesome, tell them!
                    </p>
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
