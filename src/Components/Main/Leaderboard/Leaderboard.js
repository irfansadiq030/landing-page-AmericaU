import React from 'react'
import './Leaderboard.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'

const Leaderboard = () => {
    return (
        <div className='leaderBoard-container'>
            <MobileHeader />
            <PageTitle title="Leaderboard" />
            <h1 className='flex items-center justify-center h-screen blogListing-title'>
                Comming Soon...
            </h1>
        </div>
    )
}

export default Leaderboard
