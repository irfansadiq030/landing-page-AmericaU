import React from 'react'
import './FriendsList.css'

const FriendsList = (props) => {
    const { friendsTabActive } = props
    return (
        <>
            <div style={friendsTabActive === 2 ? { display: 'flex' } : { display: 'none' }} className='friends-tab'>
                <input className='friends-name-search' type="text" placeholder='Enter name ...' />
                <span className="login-to-heroes-text">Login to Heroes league to add friends</span>
                <div className="friends-list-container">
                    <div className="friends-name-container">
                        <span style={{ background: '#60cb3d' }} className="friends-status"></span>
                        <span className="fr-name">29 CJohnson</span>
                    </div>
                    <div className="friends-name-container">
                        <span style={{ background: '#60cb3d' }} className="friends-status"></span>
                        <span className="fr-name">29 FMammeri</span>
                    </div>
                    <div className="friends-name-container">
                        <span style={{ background: 'grey' }} className="friends-status"></span>
                        <span className="fr-name">29 NSnodgrass</span>
                    </div>
                    <div className="friends-name-container">
                        <span style={{ background: 'grey' }} className="friends-status"></span>
                        <span className="fr-name">29 YSylla</span>
                    </div>
                    <div className="friends-name-container">
                        <span style={{ background: 'grey' }} className="friends-status"></span>
                        <span className="fr-name">28 irfansadiq</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FriendsList
