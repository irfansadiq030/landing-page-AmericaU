import React from 'react'
import './VideosPage.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'

const VideosPage = () => {
    return (
        <div className='videosPage-container'>
            <MobileHeader />
            <PageTitle title="Videos" />
            <div className="vidoesContent-container">
                <div className="videos-row">
                    <div className="videos-IframeContainer">
                        <div className="heroes-newsContainer">
                            <h1 className="videos-title">Heroes News</h1>
                            <div className="heroesNews-video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dz4h5v6nMEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="heroes-newsContainer">
                            <h1 className="videos-title">Meet our Heroes</h1>
                            <div className="heroesNews-video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z2lw8jjry3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>
                    <div className="videos-IframeContainer">
                        <div className="heroes-newsContainer">
                            <h1 className="videos-title">How to Videos</h1>
                            <div className="heroesNews-video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dz4h5v6nMEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="heroes-newsContainer">
                            <h1 className="videos-title">Mini Games</h1>
                            <div className="heroesNews-video">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Z2lw8jjry3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="visitUs-iconContainer">
                    <h1 className="visitUs-on-title">Visit Us on</h1>
                    <img src="images/ytLogo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default VideosPage
