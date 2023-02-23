import React, { Fragment } from "react";
import "./Events.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getEvents } from "../../../store/slices/events";

// import moment from 'moment'
import dayjs from "dayjs";

const Events = () => {
  const events = useSelector(getEvents);
  const activeEvent = events?.active;
  const staticEvents = events?.static;

  console.log(events);
  return (
    <div className="eventsPg-container">
      <MobileHeader />
      <PageTitle title="Events" />
      <div className="eventsData-container">
        <div className="mainEvents-sidebar">
          {activeEvent?.length > 0 &&
            activeEvent?.map((active) => (
              <Fragment>
                <div className="events-item">
                  <h2 className="event-title">{active.title}</h2>
                  <p className="event-descrp">{active.content}</p>

                  <div className="date-n-btn">
                    <p className="event-date active">
                      {dayjs(active.start_time * 1000).format("MMM DD")} -{" "}
                      {dayjs(active.end_time * 1000).format("MMM DD")}{" "}
                    </p>
                    <a href={active.play_url} className="event-btn">
                      <img
                        className="btn-img"
                        src="images/Portal_btnGreen.png"
                        alt=""
                      />
                      <span className="btntxt">Go Now</span>
                    </a>
                  </div>
                </div>
              </Fragment>
            ))}

          {!activeEvent?.length && <p className="not-found">No Event Found!</p>}
        </div>
        <div className="schoolEvents-sidebar">
          {staticEvents &&
            staticEvents.map((staticEvent) => (
              <Fragment>
                <div className="school-event-box">
                  <img
                    className="schoolEvent-img"
                    src="images/mobile-header-bg.png"
                    alt=""
                  />
                  <div className="school-event-content">
                    <h3 className="schl-even-title">{staticEvent.title}</h3>
                    <p className="scl-event-descrp">{staticEvent.content}</p>
                    <div className="scl-event-dateContnr">
                      <span className="schl-event-date">
                        {dayjs(staticEvent.start_time).format("dddd")}
                      </span>
                      <span className="schl-event-date">
                        {dayjs(staticEvent.start_time).format(
                          "MMM - DD - YYYY"
                        )}
                      </span>
                      <span className="schl-event-date">
                        {dayjs(staticEvent.start_time).format("h:mm:ss a")}
                      </span>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}

          {/* <div className="school-event-box">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Events;
