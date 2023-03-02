import "./App.css";
import { createContext, useState } from "react";
import PublicMain from "./Components/Main/PublicMain";
import { Route, Routes } from "react-router-dom";
import AdminIndex from "./Components/Admin/AdminIndex";
import AdminHome from "./Components/Admin/Home/Home";
import AdminBlog from "./Components/Admin/Blog/Blog";
import AdminEvents from "./Components/Admin/Events/Events";
import AdminComics from "./Components/Admin/Comics/Comics";
import AdminVideos from "./Components/Admin/Videos/Videos";
import AddEvents from "./Components/Admin/Events/AddEvents";
import AddBlog from "./Components/Admin/Blog/AddBlog";
import AddNewSeason from "./Components/Admin/SeasonPass/AddNewSeason";
import AddNewComics from "./Components/Admin/Comics/AddNewComics";

import MeetHeroes from "./Components/Main/MeetHeroes/MeetHeroes";
import BlogListing from "./Components/Main/BlogListing/BlogListing";
import Leaderboard from "./Components/Main/Leaderboard/Leaderboard";
import SeasonPassStories from "./Components/Main/SeasonPass/SeasonPassStories/SeasonPassStories";
import ComicsListing from "./Components/Main/Comics/ComicsListing/ComicsListing";
import VideosPage from "./Components/Main/VideosPage/VideosPage";
import BlogDetail from "./Components/Main/BlogListing/BlogDetail/BlogDetail";
import News from "./Components/Main/News/News";
import Games from "./Components/Main/Games/Games";
import SeasonPassMain from "./Components/Main/SeasonPass/SeasonPass";
import AdminSeasonPass from "./Components/Admin/SeasonPass/SeasonPass";
import Home from "./Components/Main/Home/Home";
import Events from "./Components/Main/Events/Events";
import Comics from "./Components/Main/Comics/Comics";
import LoginOutlet from "./Components/Main/Login/LoginOutlet";
import LoginPage from "./Components/Main/Login";
import ResetPassword from "./Components/Main/Login/ResetPassword/index";
import MessageViewer from "./Components/Main/Login/MessageViewer";
import ForgotPassword from "./Components/Main/Login/ForgotPassword";
import ThankYou from "./Components/Main/Login/ThankYou/index";
import { Provider } from "react-redux";
import { store } from "./store";
import ProtectedRoute from "./Components/Shared/ProtectedRoute/ProtectedRoute";
import DataLoader from "./Components/Shared/DataLoader/DataLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalInfo = createContext();

function App() {
  const [enableSidebar, setEnableSidebar] = useState(false);

  const HideSidebar = (enableSidebar) => {
    setEnableSidebar(!enableSidebar);
  };

  return (
    <Provider store={store}>
      <DataLoader>
        <GlobalInfo.Provider
          value={{ sidebar: enableSidebar, HideSidebar: HideSidebar }}
        >
          <Routes>
            <Route path="/admin/" element={<AdminIndex />}>
              <Route index element={<AdminHome />} />
              <Route path="videos" element={<AdminVideos />} />
              <Route path="season-pass" element={<AdminSeasonPass />} />
              <Route path="season-pass/add-new" element={<AddNewSeason />} />
              <Route path="comics" element={<AdminComics />} />
              <Route path="comics/add-new" element={<AddNewComics />} />
              <Route path="events" element={<AdminEvents />} />
              <Route path="events/add-new" element={<AddEvents />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="blog/add-new" element={<AddBlog />} />
            </Route>

            <Route path="/login" element={<LoginOutlet />}>
              <Route index element={<LoginPage />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route
                path="messageviewer"
                element={<MessageViewer message={"Hello"} is_link={true} />}
              />
              <Route path="forgotpassword" element={<ForgotPassword />} />
              <Route path="update-password" element={<ResetPassword />} />
              <Route path="thankyou" element={<ThankYou />} />
            </Route>

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <PublicMain />
                </ProtectedRoute>
              }
            >
              <Route path="meet-the-heroes" element={<MeetHeroes />} />
              <Route path="blog/blog-detail" element={<BlogDetail />} />
              <Route path="blog" element={<BlogListing />} />
              <Route path="videos" element={<VideosPage />} />
              <Route path="comics/comics-list" element={<ComicsListing />} />
              <Route path="comics" element={<Comics />} />
              <Route path="news" element={<News />} />
              <Route path="games" element={<Games />} />
              <Route
                path="seasonpass/seasonpass-list"
                element={<SeasonPassStories />}
              />
              <Route path="seasonpass" element={<SeasonPassMain />} />
              <Route path="events" element={<Events />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route index path="/" element={<Home />} />
            </Route>
          </Routes>
        </GlobalInfo.Provider>
      </DataLoader>
      <ToastContainer />
    </Provider>
  );
}

export default App;
