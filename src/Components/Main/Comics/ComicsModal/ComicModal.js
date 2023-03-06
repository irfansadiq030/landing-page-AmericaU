import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { useSelector } from "react-redux";
import { getComics } from "store/slices/comics";
import "./ComicModal.css";

export default function ComicModal({ comic, dismiss }) {
  const info = useSelector(getComics);
  const comicsData = info.data;

  const host = comicsData?.host;
  const pages = comicsData?.high?.[comic.id];

  const flipBook = React.useRef(null);

  const nextButtonClick = () => {
    flipBook.current?.pageFlip()?.flipNext();
  };

  const prevButtonClick = () => {
    flipBook.current?.pageFlip()?.flipPrev();
  };

  return (
    <div className="overflow-hidden absolute w-screen h-screen top-0 bg-blue-700/70 z-50 flex justify-center items-center">
      <div className="w-5/6">
        <HTMLFlipBook
          useMouseEvents={true}
          width={850}
          height={600}
          // height={1233}
          size="fixed"
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          ref={flipBook}
        >
          <PageCover>
            <img
              alt={comic.name}
              style={{ flex: 1, width: "100%", height: "100%" }}
              src={host + pages[0]}
            />
          </PageCover>
          {pages.slice(1).map((p, index) => (
            <Page number={index + 1} key={p} url={host + p} />
          ))}
          <PageCover>THE END</PageCover>
        </HTMLFlipBook>

        <div className="flex flex-row justify-center w-full top-4 fixed">
          <button
            onClick={prevButtonClick}
            className=" mr-2 text-2xl  text-black bg-blue-300 rounded py-2 px-5"
          >
            Previous
          </button>
          <button
            onClick={nextButtonClick}
            className="mr-2 text-2xl text-black bg-blue-300 rounded py-2 px-5"
          >
            Next
          </button>
          <button
            onClick={() => dismiss(null)}
            className=" text-2xl text-white bg-red-800 rounded py-2 px-5"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-data-img"
          style={{ backgroundImage: "url(" + props.url + ")" }}
        />

        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});
