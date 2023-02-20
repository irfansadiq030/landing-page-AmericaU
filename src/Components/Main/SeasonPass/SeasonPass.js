import React from "react";
import "./SeasonPass.css";
import PageTitle from "../PageTitle/PageTitle";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSeasons } from "../../../store/slices/season";
import { useState } from "react";
import SeasonPassModal from "./SeasonPassModal";

const SeasonPass = () => {
  const [modalShow, setModalShow] = useState(null);
  const season = useSelector(getSeasons);

  return (
    <div className="seasonPs-container">
      <MobileHeader />
      <PageTitle customColor="#FF8500" title="Season pass" />
      <div className="seasonPs-content-container">
        <div className="seasonPs-sidebar">
          <h1 className="season-title">{season.stories.sub_title}</h1>
          <div className="seasonPs-desc-container">
            <p className="seasonPs-descrp">{season.stories.sub_content}</p>
          </div>
        </div>
        {season.stories.stories.length > 1 && (
          <div className="seasonPs-main">
            <h2 className="seasonPs-newTag">New</h2>
            <div className="first-slide">
              <span
                onClick={() => setModalShow(season.stories.stories[0])}
                className="activeSeasonPs-data"
              >
                <h2 className="active-seasonPs-title">
                  {season.stories.stories[0].title}
                </h2>
                <span className="seasonPs-date">
                  {new Date(
                    season.stories.stories[0].c_time * 1000
                  ).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </span>
              <img
                onClick={() => setModalShow(season.stories.stories[0])}
                src={season.stories.stories[0].theme_img}
                alt={season.stories.stories[0].title}
                className="seasonPs-main-img"
              />
            </div>
            <React.Fragment>
              <div className="latestSeasonStories-container">
                {season.stories.stories.slice(1).map((item) => (
                  <div className="seasonBox1">
                    <img
                      onClick={() => setModalShow(item)}
                      className="seasonItme-img"
                      src={item.theme_img}
                      alt={item.title}
                    />
                    <span
                      onClick={() => setModalShow(item)}
                      className="latestSeasonPs-data"
                    >
                      <h2 className="seasonPs-item-title">{item.title}</h2>
                      <span className="seasonPs-item-date">
                        {new Date(item.c_time * 1000).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <Link to="seasonpass-list" className="readmore-seasonStories-btn">
                Read More
              </Link>
            </React.Fragment>
          </div>
        )}

        {/* Modal */}
        {modalShow && (
          <SeasonPassModal
            item={modalShow}
            dismiss={() => setModalShow(null)}
          />
        )}
      </div>
    </div>
  );
};

export default SeasonPass;
