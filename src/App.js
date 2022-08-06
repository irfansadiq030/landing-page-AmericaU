import './App.css';
import { createContext, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
// import MobileHeader from './Components/MobileHeader/MobileHeader';
export const GlobalInfo = createContext();

function App() {
  const [enableSidebar, setEnableSidebar] = useState(false);

  const HideSidebar = (enableSidebar) => {
    setEnableSidebar(!enableSidebar)
    // console.warn(enableSidebar)
  }
  return (
    <>
      <GlobalInfo.Provider value={{ sidebar: enableSidebar, HideSidebar: HideSidebar }}>
        <div>
          <div className="components-container">
            <Sidebar />
            <Main />
          </div>
        </div>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
