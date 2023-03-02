import React from "react";
import "./Comics.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import PageTitle from "../PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getComics } from "../../../store/slices/comics";

const Comics = () => {
  const comicsInfo = useSelector(getComics);

  const comics = comicsInfo.list;

  return (
    <div className="comics-container">
      <MobileHeader />
      <PageTitle customColor="#FF8500" title="Comics" />
      <div className="comics-data-container">
        <h1 className="new-tag">New</h1>
        <div className="comics-card-container">
          {comics.length > 0 ? (
            comics.slice(0, 3).map((comic) => (
              <div className="comics-card" key={comic.id}>
                <img className="comics-coverimg" src={comic.cover_img} alt="" />
              </div>
            ))
          ) : (
            <h1>No Comics Found</h1>
          )}
        </div>
        <Link to="comics-list" className="readmore-comics-btn">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Comics;
