import React, { useContext } from 'react'
import './Main.css'
import './MobileHeader.css'
import BlogSlider from './BlogSlider/BlogSlider'
import { GlobalInfo } from '../../App';
import HomepageTabs from './HomepageTabs/HomepageTabs';

const Main = () => {
  const { sidebar, HideSidebar } = useContext(GlobalInfo);

  return (
    <div className='main-container'>
      <div className="mobile-header">
        <div className="mobile-logo-container">
          <img src="images/Logo.png" alt="" />
        </div>
        <div className='mobile-menu-icon-container'>
          <h1 className="menu-text">Menu</h1>
          <div className="hamburger-container">
            <i onClick={() => HideSidebar(sidebar)} class="fa-solid fa-bars bars-icon"></i>
          </div>
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

        <HomepageTabs />

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
