import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../store/slices/user";
import { toast } from "react-toastify";
import { apiCallerPost } from "./../../../services/api";
import { loadNews } from "../../../store/slices/news";
import { loadSeasons, loadStories } from "../../../store/slices/season";
import { loadEvents } from "../../../store/slices/events";
import { loadVideos } from "../../../store/slices/videos";
import { loadGames } from "../../../store/slices/games";
import { loadComics } from "../../../store/slices/comics";
import { loadBlog } from "../../../store/slices/blog";

export default function DataLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      toast.loading("We are loading data...");

      const [news, season, events, videos, games, comics, blog, stories] =
        await Promise.all([
          apiCallerPost({ cmd: "auth_HeroLeaguePortalIndex.getNews" }),
          apiCallerPost({ cmd: "auth_HeroLeaguePortalIndex.getCurSeason" }),
          apiCallerPost({ cmd: "auth_HeroLeaguePortalIndex.getEvents" }),
          apiCallerPost({ cmd: "auth_HeroLeaguePortalIndex.getVideos" }),
          apiCallerPost({ cmd: "auth_HeroLeaguePortalIndex.getMiniGames" }),
          apiCallerPost({ cmd: "auth_HeroLeaguePortalIndex.getComics" }),
          apiCallerPost({ cmd: "auth_HeroLeagueBlogOpen.getBlog" }),
          apiCallerPost({
            cmd: "auth_HeroLeaguePortalIndex.getCurSeasonStory",
          }),
        ]);

      dispatch(loadNews(news.data.data));
      dispatch(loadSeasons(season.data.data));
      dispatch(loadEvents(events.data.data));
      dispatch(loadVideos(videos.data.data));
      dispatch(loadGames(games.data.data));
      dispatch(loadComics(comics.data.data));
      dispatch(loadBlog(blog.data.blogs));
      dispatch(loadStories({ stories: stories.data.data }));

      toast.dismiss();
    };

    loadData();
  }, []);
  return children;
}
