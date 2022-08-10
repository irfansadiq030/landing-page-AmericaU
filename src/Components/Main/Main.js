import React, { useContext, useState } from 'react'
import './Main.css'
import './MobileHeader.css'
import BlogSlider from './BlogSlider/BlogSlider'
import { GlobalInfo } from '../../App';

const Main = (props) => {
  const { sidebar, HideSidebar } = useContext(GlobalInfo);
  const [selectBox, setSelectBox] = useState(1);

  return (
    <div className='main-container'>
      <div className="mobile-header">
        <div className="hamburger-container">
          <i onClick={() => HideSidebar(sidebar)} class="fa-solid fa-bars bars-icon"></i>
        </div>
      </div>

      <div className="row">

        <div className="season-box">
          <h1 className='season-heading'>Season 1 is here!</h1>
          <p className="season-description">
            Lord DarkStar’s hiding out somewhere in The Wilds. It’s up to you to find him before he can build his super nasty, totally terrible, super stinky base.
            Take on Hero Missions to raise your level and get the gear you need to stop Lord DarkStar
          </p>
          <a href="/" className="btn">
            Play Now
          </a>
        </div>

        <div className="character-container">
          <div className="power-select-character">
            <div style={selectBox === 1 ? { display: 'flex', justifyContent: 'center', alignItems: 'center' } : { display: 'none' }} className=''>
              <img className='charcter-img' src="images/tbrender.png" alt="" />
              <div className='dailyChalleng-box'>
                <img className='box-img' src="images/DailyChallenge_box.png" alt="" />
                <div className="name-container">
                  <p className='charcter-name'>Sir Itchay ninja</p>
                  <p className='charcter-name'>LV.2</p>
                </div>
              </div>
            </div>
            <div style={selectBox === 2 ? { display: 'flex' } : { display: 'none' }} className='friends-tab'>
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
                {/* <div className="friends-name-container">29 FMammeri</div>
                <div className="friends-name-container">29 NSnodgrass</div>
                <div className="friends-name-container">29 YSylla</div>
                <div className="friends-name-container">29 FMammeri</div> */}
              </div>

            </div>
            <div style={selectBox === 3 ? { display: 'flex' } : { display: 'none' }} className='chat-tab'>
              <div className="chat-txt-container">
                {/* <div className="txt-msg">
                  I'm ready to attack the pirates!
                </div>
                <span className='msg-time'>Charming Shyclown 9:35 am</span> */}
              </div>
              <form className="chat-category">
                <select className='chat-dropdown'>
                  <option value="actual value 1">Chat Category</option>
                  <option value="actual value 2">Category A</option>
                  <option value="actual value 3">Category B</option>
                </select>
                <input type="text" class='chat-txt' />
                <button type="submit" className='post-btn'>
                  <img className='btn-img' src="images/Portal_btnBlue.png" alt="" />
                  <span className='post-btn-txt'>post</span>
                </button>
              </form>

            </div>

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

      </div>

      <div className="blog-row">
        <div className="heading-btn-container">
          <h1 className="latest-blogs-heading">Latest Blogs & Updates</h1>
          <div className="read-more-btn-container">
            <img className='readmore-btn-img' src="images/Portal_btnOrange.png" alt="" />
            <a href="/" className="read-more-btntext">Read More</a>
          </div>
        </div>

        {/* Blog Slider */}
        <BlogSlider />
      </div>
    </div>
  )
}

export default Main
