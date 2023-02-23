import React from "react";
import "./Games.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getGames } from "../../../store/slices/games";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import SliderLeftButton from "./SliderLeftButton";
import SliderRightButton from "./SliderRightButton";

const Games = () => {
  const games = useSelector(getGames);

  const openGame = (game) => {
    window.open(game, "_blank");
  };

  return (
    <div className="gamesPg-container">
      <MobileHeader />
      <PageTitle title="Games" />
      <div className="gamesContentContainer">
        <div className="gamesDataContainer">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {games.map((game, index) => {
              return (
                <SwiperSlide>
                  <div
                    key={index}
                    className="gameIcon"
                    onClick={() => openGame(game.play_url)}
                  >
                    <img src={game.img} alt="games race icon" />
                    <h2 className="gameTitle">{game.name}</h2>
                  </div>
                </SwiperSlide>
              );
            })}

            <span slot="container-end">
              <div className="games-pagintaion">
                <SliderLeftButton />
                <SliderRightButton />
              </div>
            </span>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Games;
