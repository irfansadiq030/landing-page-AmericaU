import React from 'react'
import './Leaderboard.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'

const Leaderboard = () => {
    return (
        <div className='leaderBoard-container'>
            <MobileHeader />
            <PageTitle title="Leaderboard" />
        </div>
    )
}

export default Leaderboard
