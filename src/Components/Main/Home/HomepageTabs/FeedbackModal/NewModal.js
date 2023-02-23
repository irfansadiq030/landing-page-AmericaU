/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import CoinsContent from "./CoinsContent";
import "./NewModal.css";

import { apiCallerPost } from "../../../../../services/api";

export default function NewModal({ dismiss }) {
  const [type, setType] = useState("form");

  const [inputData, setInputData] = useState({
    details: "",
    email: "",
  });

  const submitFeedback = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user")).jwt_info.user;

      if (inputData.details === "") {
        return window.alert("Please add feedback");
      }

      const postData = {
        ...inputData,
        user_id: user.id,
        user_name: user?.username || user?.login_name,
        cmd: "AdminData.addBugsReport1",
      };

      setType("loading");

      const resp = await apiCallerPost(postData);

      setInputData({
        details: "",
        email: "",
      });

      console.log(resp.data);

      setType("coins");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="frame-container">
      <img src={require("./HL_UI-BgCircle-lg.png")} class="left-circles" />
      <img src={require("./HL_UI-BgCircle-lg.png")} class="right-circles" />
      <div class="frame">
        <div class="top-area">
          <div class="title bg-cover">
            <h1>Feedback</h1>
          </div>

          <img onClick={dismiss} className="close-png" src="images/close.png" />
        </div>

        <div class="frame-body bg-white h-full">
          {type === "form" && (
            <FeedbackForm value={inputData} onInputData={setInputData} />
          )}
          {type === "coins" && <CoinsContent />}
          {type === "loading" && <div className="loading-spinner" />}
        </div>

        <div class="bottom-area">
          <div
            class="button"
            onClick={
              type === "form"
                ? submitFeedback
                : type === "coins"
                ? dismiss
                : () => {}
            }
            style={{ cursor: "pointer" }}
          >
            <h1>
              {type === "form"
                ? "Send"
                : type === "coins"
                ? "Okay"
                : "Loading..."}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
