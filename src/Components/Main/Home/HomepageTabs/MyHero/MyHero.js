import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../../../store/slices/user";
import "./MyHero.css";

const MyHero = (props) => {
  const { MyHeroTabActive } = props;
  const user = useSelector(getUser);

  return (
    <>
      <div
        style={
          MyHeroTabActive === 1
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : { display: "none" }
        }
        className=""
      >
        <img className="charcter-img" src="images/tbrender.png" alt="" />
        <div className="dailyChalleng-box">
          <img className="box-img" src="images/DailyChallenge_box.png" alt="" />
          <div className="name-container">
            <p className="charcter-name">{user.jwt_info.user.username}</p>
            <p className="charcter-name">LV.2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHero;
