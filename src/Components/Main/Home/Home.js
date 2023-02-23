import React from "react";
import BlogSlider from "./BlogSlider/BlogSlider";
import HomepageTabs from "./HomepageTabs/HomepageTabs";
import "./Home.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSeasons } from "../../../store/slices/season";

const Home = () => {
  const season = useSelector(getSeasons);

  return (
    <div className="home-container">
      <MobileHeader />
      <div className="row">
        <div className="season-box">
          <h1 className="season-heading">{season?.main_title}</h1>
          <p className="season-description">{season?.main_content}</p>
          <a href="https://portal.americau.com/loading" className="btn">
            Play Now
          </a>
        </div>

        <HomepageTabs />
      </div>

      <div className="blog-row">
        <div className="heading-btn-container">
          <h1 className="latest-blogs-heading">Latest Blogs & Updates</h1>
          <div className="read-more-btn-container">
            <img
              className="readmore-btn-img"
              src="images/Portal_btnOrange.png"
              alt=""
            />
            <Link to="/blog" className="read-more-btntext">
              Read More
            </Link>
          </div>
        </div>

        {/* Blog Slider */}
        <BlogSlider />
      </div>
    </div>
  );
};

export default Home;
