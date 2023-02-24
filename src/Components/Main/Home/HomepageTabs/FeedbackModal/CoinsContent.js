import React from "react";

export default function CoinsContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="frame-content">
        Thanks for your feedback! You are helping make Heroes League even more
        better while earning daily coins. If you find a major bug, you can win
        bigger prizes!
      </p>
      <div className="coins-container">
        <div className="strip">
          <div className="content flex justify-between items-center">
            <p className="text">+</p>
            <img
              style={{ width: "70px" }}
              src={require("./HL_UI-coin-lg.png")}
              alt=""
            />
            <p className="text">150</p>
          </div>
        </div>
      </div>
    </div>
  );
}
