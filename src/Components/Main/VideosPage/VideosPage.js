import React, { Fragment } from 'react'
import './VideosPage.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'
import { useSelector } from 'react-redux'
import { getVideos } from '../../../store/slices/videos'

const VideosPage = () => {
    const videos = useSelector(getVideos);
    console.log(videos[0].video_url);
    return (
        <div className='videosPage-container'>
            <MobileHeader />
            <PageTitle title="Videos" />
            <div className="vidoesContent-container">
                <div className="videos-row">
                    {videos.length > 0 && <Fragment>
                        <div className="videos-IframeContainer">
                            {videos.map(video => <div className="heroes-newsContainer">
                                <h1 className="videos-title">{video.name}</h1>
                                <div className="heroesNews-video">
                                    <video src={video.video_url} controls></video>
                                </div>
                            </div>)}

                        </div>
                    </Fragment>}
                </div>
                <div className="visitUs-iconContainer">
                    <h1 className="visitUs-on-title">Visit Us on</h1>
                    <img className='hover:cursor-pointer' src="images/ytLogo.png" alt="" onClick={() => window.open("https://www.youtube.com/c/HeroesLeague")} />
                </div>
            </div>
        </div>
    )
}

export default VideosPage
