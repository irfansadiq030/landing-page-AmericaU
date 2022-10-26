import React, { Fragment } from 'react'
import './Events.css';
import MobileHeader from '../MobileHeader/MobileHeader';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getEvents } from '../../../store/slices/events';

import moment from 'moment'

const Events = () => {
  const events = useSelector(getEvents);
  const activeEvent = events.active;
  const staticEvents = events.static;
  return (
    <div className='eventsPg-container'>
      <MobileHeader />
      <PageTitle title="Events" />
      <div className="eventsData-container">
        <div className="mainEvents-sidebar">
          {
            activeEvent && activeEvent.map(active => <Fragment>
              <div className="events-item">
                <h2 className="event-title">
                  {active.title}
                </h2>
                <p className="event-descrp">
                  {active.content}
                </p>
                {/* <p className="event-date">MAY 20th - May 30th</p> */}
                <p className="event-date">{moment(Number(active.start_time)).format("MMM Do")} - {moment(Number(active.end_time)).format("MMM Do")} </p>
                <a href={active.play_url} className="event-btn">
                  <img className='btn-img' src="images/Portal_btnGreen.png" alt="" />
                  <span className="btntxt">Go Now</span>
                </a>
              </div>
            </Fragment>)
          }

          {/* <div className="events-item">
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
          </div> */}
        </div>
        <div className="schoolEvents-sidebar">
          {
            staticEvents && staticEvents.map(staticEvent => <Fragment>
              <div className="school-event-box">
                <img className='schoolEvent-img' src="images/mobile-header-bg.png" alt="" />
                <div className="school-event-content">
                  <h3 className="schl-even-title">{staticEvent.title}</h3>
                  <p className="scl-event-descrp">
                    {
                      staticEvent.content
                    }
                  </p>
                  <div className="scl-event-dateContnr">
                    <span className="schl-event-date">{moment(Number(staticEvent.start_time)).format('dddd')}</span>
                    <span className="schl-event-date">{moment(Number(staticEvent.start_time)).format('MMM Do YYYY')}</span>
                    <span className="schl-event-date">{moment(Number(staticEvent.start_time)).format('h:mm:ss a')}</span>
                  </div>

                </div>
              </div>
            </Fragment>)
          }
          
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
