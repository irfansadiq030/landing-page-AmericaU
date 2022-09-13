import React from 'react'
import './Events.css';
import MobileHeader from '../MobileHeader/MobileHeader';
import PageTitle from '../PageTitle/PageTitle';

const Events = () => {
  return (
    <div className='eventsPg-container'>
      <MobileHeader />
      <PageTitle title="Events" />
      <div className="eventsData-container">
        <div className="mainEvents-sidebar">
          <div className="events-item">
            <h2 className="event-title">
              Mysterious MINE
            </h2>
            <p className="event-descrp">
              A new mine has popped up until May 30th! Explore the mine and find the gold orbs to gain EXP!
            </p>
            <p className="event-date">MAY 20th - May 30th</p>
            <a href="/" className="event-btn">
              <img className='btn-img' src="images/Portal_btnGreen.png" alt="" />
              <span className="btntxt">Go Now</span>
            </a>
          </div>
          <div className="events-item">
            <h2 className="event-title">
              Mysterious MINE
            </h2>
            <p className="event-descrp">
              A new mine has popped up until May 30th! Explore the mine and find the gold orbs to gain EXP!
            </p>
            <p className="event-date">MAY 20th - May 30th</p>
            <a href="/" className="event-btn">
              <img className='btn-img' src="images/Portal_btnGreen.png" alt="" />
              <span className="btntxt">Go Now</span>
            </a>
          </div>
        </div>
        <div className="schoolEvents-sidebar">
          <div className="school-event-box">
            <img className='schoolEvent-img' src="images/mobile-header-bg.png" alt="" />
            <div className="school-event-content">
              <h3 className="schl-even-title">Title</h3>
              <p className="scl-event-descrp">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, culpa.
              </p>
              <div className="scl-event-dateContnr">
                <span className="schl-event-date">Day</span>
                <span className="schl-event-date">Date</span>
                <span className="schl-event-date">Time</span>
              </div>

            </div>
          </div>
          <div className="school-event-box">
            <img className='schoolEvent-img' src="images/mobile-header-bg.png" alt="" />
            <div className="school-event-content">
              <h3 className="schl-even-title">Title</h3>
              <p className="scl-event-descrp">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, culpa.
              </p>
              <div className="scl-event-dateContnr">
                <span className="schl-event-date">Day</span>
                <span className="schl-event-date">Date</span>
                <span className="schl-event-date">Time</span>
              </div>

            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Events
