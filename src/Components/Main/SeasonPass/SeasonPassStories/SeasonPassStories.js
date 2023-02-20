import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./SeasonPassStories.css";
import MobileHeader from "../../MobileHeader/MobileHeader";
import PageTitle from "../../PageTitle/PageTitle";
import { getSeasons } from "../../../../store/slices/season";
import SeasonPassModal from "../SeasonPassModal";

const SeasonPassStories = () => {
  const [modalShow, setModalShow] = useState(null);
  const season = useSelector(getSeasons);
  const stories = season?.stories?.stories;

  return (
    <div className="seasonPs-container">
      <MobileHeader />
      <PageTitle customColor="#FF8500" title="Season pass Stories" />
      <div className="blogCard-container">
        {stories.map((item) => {
          return (
            <div className="seasonPassCard">
              <div className="seasonPass-img-container">
                <img
                  onClick={() => setModalShow(item)}
                  className="seasonStories-thumbnail"
                  src={item.theme_img}
                  alt={item.title}
                />
              </div>
              <div
                className="seasonPassContent-container "
                onClick={() => setModalShow(item)}
              >
                <span className="blogtitle-link">
                  <h1 className="blogListing-title">{item.title}</h1>
                </span>
                <p className="blog-date">
                  {new Date(item.c_time * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                </p>
                <p className="blog-description">{item?.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="blog-pagintaion">
        <img
          className="blog-left-arrow"
          src="../images/blog-left-arrow.png"
          alt=""
        />
        <img
          className="blog-right-arrow"
          src="../images/blog-right-arrow.png"
          alt=""
        />
      </div>

      {modalShow && (
        <SeasonPassModal item={modalShow} dismiss={() => setModalShow(null)} />
      )}
    </div>
  );
};

export default SeasonPassStories;
