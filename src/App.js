import './App.css';
import { createContext, useState } from 'react';
import PublicMain from './Components/Main/PublicMain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminIndex from './Components/Admin/AdminIndex';
import Home from './Components/Admin/Home/Home';
import Blog from './Components/Admin/Blog/Blog';
import Events from './Components/Admin/Events/Events';
import Comics from './Components/Admin/Comics/Comics';
import Videos from './Components/Admin/Videos/Videos';
import SeasonPass from './Components/Admin/SeasonPass/SeasonPass';


export const GlobalInfo = createContext();

function App() {
  const [enableSidebar, setEnableSidebar] = useState(false);

  const HideSidebar = (enableSidebar) => {
    setEnableSidebar(!enableSidebar)
  }


  return (
    <>
      <GlobalInfo.Provider value={{ sidebar: enableSidebar, HideSidebar: HideSidebar }}>
        <Routes>
          <Route path='/' element={<PublicMain />} />
          <Route path='/admin/' element={<AdminIndex />} >
            <Route index element={<Home />} />
            <Route path='videos' element={<Videos />} />
            <Route path='season-pass' element={<SeasonPass />} />
            <Route path='comics' element={<Comics />} />
            <Route path='events' element={<Events />} />
            <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
