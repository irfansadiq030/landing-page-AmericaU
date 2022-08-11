import React, { useState } from 'react'
import './HomepageTabs.css'
import ChatTab from './ChatTab/ChatTab';
import FriendsList from './FriendsList/FriendsList';
import MyHero from './MyHero/MyHero';

const HomepageTabs = () => {
    const [selectBox, setSelectBox] = useState(1);

    return (
        <>
            <div className="character-container">
                <div className="power-select-character">

                    <MyHero MyHeroTabActive={selectBox} />
                    <FriendsList friendsTabActive={selectBox} />
                    <ChatTab chatTabActive={selectBox} />

                </div>
                <div onClick={() => setSelectBox(1)} style={selectBox === 1 ? { left: '20px', top: '150px', width: '120px', height: '37px' } : {}} className="myheroes-container">
                    <img alt='' src={selectBox === 1 ? 'images/Portal_btnBlue.png' : 'images/Portal_btnOrange.png'} className="myheroes-img" />
                    <h1 className="myheroes-text">My Hero</h1>
                </div>
                <div onClick={() => setSelectBox(2)} style={selectBox === 2 ? { left: '20px', top: '193px', width: '120px', height: '37px' } : {}} className="myfriends-container">
                    <img src={selectBox === 2 ? 'images/Portal_btnBlue.png' : 'images/Portal_btnOrange.png'} alt="" className="myheroes-img" />
                    <h1 className="myheroes-text">Friends</h1>
                </div>
                <div onClick={() => setSelectBox(3)} style={selectBox === 3 ? { left: '20px', top: '235px', width: '120px', height: '37px' } : {}} className="chat-container">
                    <img src={selectBox === 3 ? 'images/Portal_btnBlue.png' : 'images/Portal_btnOrange.png'} alt="" className="myheroes-img" />
                    <h1 className="myheroes-text">Chat</h1>
                </div>
            </div>
        </>
    )
}

export default HomepageTabs
