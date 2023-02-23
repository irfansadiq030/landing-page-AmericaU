import React from "react";

export default function CoinsContent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p class="frame-content">
        Thanks for your feedback! You are helping make Heroes League even more
        better while earning daily coins. If you find a major bug, you can win
        bigger prizes!
      </p>
      <div class="coins-container">
        <div class="strip">
          <div class="content flex justify-between items-center">
            <p class="text">+</p>
            <img
              style={{ width: "70px" }}
              src={require("./HL_UI-coin-lg.png")}
              alt=""
            />
            <p class="text">150</p>
          </div>
        </div>
      </div>
    </div>
  );
}
