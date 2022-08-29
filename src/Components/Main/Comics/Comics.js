import React from 'react'
import './Comics.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'
import { Link } from 'react-router-dom'

const Comics = () => {
    return (
        <div className='comics-container'>
            <MobileHeader />
            <PageTitle customColor="#FF8500" title="Comics" />

            <div className="comics-data-container">
                <h1 className="new-tag">
                    New
                </h1>
                <div className="comics-card-container">
                    <div className="comics-card">
                        <img className='comics-coverimg' src="images/cover.jpg" alt="" />
                    </div>
                    <div className="comics-card">
                        <img className='comics-coverimg' src="images/cover2.png" alt="" />
                    </div>
                    <div className="comics-card">
                    <img className='comics-coverimg' src="images/cover3.png" alt="" />
                    </div>
                </div>
                <Link to="/comics-list" className="readmore-comics-btn">
                    Read More
                </Link>

            </div>
        </div>
    )
}

export default Comics
