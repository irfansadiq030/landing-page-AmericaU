import React from 'react'
import './SeasonPass.css'
import PageTitle from '../PageTitle/PageTitle'
import MobileHeader from '../MobileHeader/MobileHeader'
import { Link } from 'react-router-dom'

const SeasonPass = () => {
    return (
        <div className='seasonPs-container'>
            <MobileHeader />
            <PageTitle customColor="#FF8500" title="Season pass" />
            <div className="seasonPs-content-container">
                <div className="seasonPs-sidebar">
                    <h1 className="season-title">
                        S1: THE RISE OF DARKSTAR
                    </h1>
                    <div className="seasonPs-desc-container">
                        <p className='seasonPs-descrp'>
                            Lord DarkStar is hiding somewhere in the pirate caves. It’s up to you and your classmates to search pirates caves for his secret base.
                            Complete the season pass to earn the Cap of Light and Justice!
                            Only available until August 20th!
                        </p>
                        <p className='seasonPs-descrp'>
                            Lord DarkStar is hiding somewhere in the pirate caves. It’s up to you and your classmates to search pirates caves for his secret base.
                            Complete the season pass to earn the Cap of Light and Justice!
                            Only available until August 20th!
                        </p>
                        <p className='seasonPs-descrp'>
                            Lord DarkStar is hiding somewhere in the pirate caves. It’s up to you and your classmates to search pirates caves for his secret base.
                            Complete the season pass to earn the Cap of Light and Justice!
                            Only available until August 20th!
                        </p>
                        <p className='seasonPs-descrp'>
                            Lord DarkStar is hiding somewhere in the pirate caves. It’s up to you and your classmates to search pirates caves for his secret base.
                            Complete the season pass to earn the Cap of Light and Justice!
                            Only available until August 20th!
                        </p>
                    </div>
                </div>
                <div className="seasonPs-main">
                    <h2 className="seasonPs-newTag">
                        New
                    </h2>
                    <div className="activeSeasonPs-data">
                        <h2 className="active-seasonPs-title">Slide Title</h2>
                        <span className="seasonPs-date"> Mar,20,2022</span>
                    </div>
                    <img src="images/blog Detail.png" alt="" className="seasonPs-main-img" />
                    <div className="latestSeasonStories-container">
                        <div className="seasonBox1">
                            <img className='seasonItme-img' src="images/Week 1 Story 2.png" alt="" />
                            <div className="latestSeasonPs-data">
                                <h2 className="seasonPs-item-title">Slide Title</h2>
                                <span className="seasonPs-item-date"> Mar,20,2022</span>
                            </div>
                        </div>
                        
                        <div className="seasonBox1">
                            <img className='seasonItme-img' src="images/Week 1 Story 2.png" alt="" />
                            <div className="latestSeasonPs-data">
                                <h2 className="seasonPs-item-title">Slide Title</h2>
                                <span className="seasonPs-item-date"> Mar,20,2022</span>
                            </div>
                        </div>
                        
                        <div className="seasonBox1">
                            <img className='seasonItme-img' src="images/Week 1 Story 2.png" alt="" />
                            <div className="latestSeasonPs-data">
                                <h2 className="seasonPs-item-title">Slide Title</h2>
                                <span className="seasonPs-item-date"> Mar,20,2022</span>
                            </div>
                        </div>
                        
                    </div>
                    <Link to="/seasonpass-list" className="readmore-seasonStories-btn">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SeasonPass
