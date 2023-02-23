import React, { useContext } from "react";
import "./Sidebar.css";
import Navmenu from "./Navmenu/Navmenu";
import { GlobalInfo } from "../../App";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/user";
import { isDev } from "../Shared/constants";

const Sidebar = () => {
  const { sidebar, HideSidebar } = useContext(GlobalInfo);
  const dispatch = useDispatch(logout);

  const logOutUser = () => {
    localStorage.clear();
    dispatch(logout());

    if (!isDev) {
      window.location.href = "https://portal.americau.com/logout";
    }
  };

  const navToData = () => {
    try {
      window.location.href =
        "https://data.americau.com/?token=" +
        JSON.parse(localStorage.getItem("user")).jwt_str;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={sidebar ? { display: "flex" } : {}}
        className="sidebar-container"
      >
        <div className="logo-nav-container">
          <div className="logo-container">
            <Link onClick={() => HideSidebar(sidebar)} to="/">
              <img className="logo-img" src={"logo.png"} alt="" />{" "}
            </Link>
          </div>
          <Navmenu />
        </div>

        <div className="sidebar-footer-container">
          <div className="meet-heroes-img-container">
            <Link onClick={() => HideSidebar(sidebar)} to="/meet-the-heroes">
              <img
                className="meet-heroes-img"
                src="images/meethHeroes.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="portal-container" onClick={navToData}>
            <img className="portal-img" src="images/portal-btn.png" alt="" />
            <p className="portal-text">Parent/Teacher Login</p>
          </div>
          <p className="logout-link cursor-pointer" onClick={logOutUser}>
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
