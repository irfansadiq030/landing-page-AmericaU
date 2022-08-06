import React, { useContext } from 'react'
import './Main.css'
import './MobileHeader.css'
import BlogSlider from './BlogSlider/BlogSlider'
import { GlobalInfo } from '../../App';

const Main = (props) => {
  const { sidebar, HideSidebar } = useContext(GlobalInfo);
  // console.log(sidebar);

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
            <img className='charcter-img' src="images/tbrender.png" alt="" />
            <div className='dailyChalleng-box'>
              <img className='box-img' src="images/DailyChallenge_box.png" alt="" />
              <div className="name-container">
                <p className='charcter-name'>Sir Itchay ninja</p>
                <p className='charcter-name'>LV.2</p>
              </div>
            </div>
          </div>
          <div className="myheroes-container">
            <img src="images/Portal_btnBlue.png" alt="" className="myheroes-img" />
            <h1 className="myheroes-text">My Hero</h1>
          </div>
          <div className="myfriends-container">
            <img src="images/Portal_btnOrange.png" alt="" className="myheroes-img" />
            <h1 className="myheroes-text">Friends</h1>
          </div>
          <div className="chat-container">
            <img src="images/Portal_btnOrange.png" alt="" className="myheroes-img" />
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
