import React from "react";
import MobileHeader from "../../MobileHeader/MobileHeader";
import PageTitle from "../../PageTitle/PageTitle";
import "./ComicsListing.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getComics } from "../../../../store/slices/comics";
import dayjs from "dayjs";
import { useState } from "react";
import { createPortal } from "react-dom";
import ComicModal from "../ComicsModal/ComicModal";

const ComicsListing = () => {
  const [page, setPage] = useState(1);
  const info = useSelector(getComics);
  const comics = info.list;
  const [modal, setModal] = useState(null);

  return (
    <div className="comics-container">
      <MobileHeader />
      <PageTitle customColor="#FF8500" title="Comics" />
      {comics.slice((page - 1) * 6, page * 6).map((comic, index) => {
        return (
          <div
            className="comicsCard cursor-pointer"
            onClick={() => {
              setModal(comic);
            }}
          >
            <div className="comics-img-container">
              <img
                className="comicsListing-thumbnail"
                src={comic.cover_img}
                alt="blog thumbnail"
              />
            </div>
            <div className="comicsContent-container">
              <div className="comicsTitle-link">
                <h1 className="comicsListing-title">
                  {comic.name ? comic.name : "No title found"}
                </h1>
              </div>
              <p className="blog-date">
                {dayjs(comic.c_time * 1000).format("MMMM DD,   YYYY")}{" "}
              </p>
              <p className="comics-description">{comic?.content || ""}</p>
            </div>
          </div>
        );
      })}
      <div className="blog-pagintaion">
        <img
          onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)}
          className="blog-left-arrow"
          src="images/blog-left-arrow.png"
          alt=""
        />
        <img
          onClick={() => setPage(page + 1)}
          className="blog-right-arrow"
          src="images/blog-right-arrow.png"
          alt=""
        />
      </div>

      {modal &&
        createPortal(
          <ComicModal comic={modal} dismiss={setModal} />,
          document.body
        )}
    </div>
  );
};

export default ComicsListing;
