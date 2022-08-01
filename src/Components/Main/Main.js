import React from 'react'
import './Main.css'
import './MobileHeader.css'

const Main = (props) => {

  return (
    <div className='main-container'>
      <div className="mobile-header">
        <div className="hamburger-container">
          <i class="fa-solid fa-bars bars-icon"></i>
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
          
        </div>

      </div>
    </div>
  )
}

export default Main
