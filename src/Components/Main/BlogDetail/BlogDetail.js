import React, { useEffect, useState } from 'react'
import './BlogDetail.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { imagesBase } from '../../../services/api';
import dayjs from 'dayjs'
import { apiCallerPost } from './../../../services/api';


const BlogDetail = () => {
    const { state: post } = useLocation();
    const nav = useNavigate();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState("")

    useEffect(() => {
        const getComments = async () => {
            const results = await apiCallerPost({ cmd: "auth_HeroLeagueBlogOpen.getBlogComment", blog_id: post.id })
            setComments(results.data.comments);
            setLoading(false);
        }

        if (post?.id) getComments();

    }, [post?.id])


    if (post == null) {
        return <Navigate to={"/blog"} />
    }

    const handleSubmitComment = async (e) => {
        setLoading(true);
        const resp = await apiCallerPost({ cmd: "auth_HeroLeagueBlogOpen.addComment", blog_id: post.id, content: description });
        console.log(resp)
        setLoading(false);
    }


    return (
        <div className='blogDetail-container'>
            <MobileHeader />
            {/* <img className='back-btn' alt='back button' src="images/blog-left-arrow.png" onClick={() => nav("/blog")} /> */}

            <img className='blogDetail-main-img' src={imagesBase + post.theme_img} alt={post.title} />
            <h1 className='blogDetail-title'>{post.title}</h1>
            <div className="blog-meta-container">
                <span>Date: {dayjs(post.c_time).format("MMM DD, YYYY")} |</span>
                <span>Category: {post.kind} |</span>
                <span>Posted By: {post.author} </span>
            </div>
            <div className="blogDetail-content-container">
                <div className="blog_txt_container" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            <div className="blogComment-container">
                <h2 className="commentsCount">{comments.length ? `${comments.length + " Comments"}` : "No Comments"}</h2>
                <div className="commentForm">
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols="320" rows="7" className='commentfield' />
                    <button onClick={handleSubmitComment} className='addComment-btn'>Add Comment</button>
                </div>
                {/* Comment List */}
                {!loading && <div className="commentList-container">
                    {comments.map(comment => <div key={comment.add_time} className="commentDetail-container">
                        <div className="commenter-info">
                            <div className="commentor-imgContainer">
                                <img src={comment.avatar} className="commentor-img" alt={comment.username} />
                            </div>
                            <span className='comment-time'>{comment.days_live} days</span>
                        </div>
                        <div className="commentData">
                            <h3 className="commentor-name">{comment.username}</h3>
                            <p className='actual-comment'>{comment.content}</p>
                        </div>
                    </div>)}
                </div>}

                {loading && "Loading..."}
            </div>
        </div >
    )
}

export default BlogDetail
