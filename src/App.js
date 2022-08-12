import './App.css';
import { createContext, useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
export const GlobalInfo = createContext();

function App() {
  const [enableSidebar, setEnableSidebar] = useState(false);

  const HideSidebar = (enableSidebar) => {
    setEnableSidebar(!enableSidebar)
  }
  return (
    <>
      <GlobalInfo.Provider value={{ sidebar: enableSidebar, HideSidebar: HideSidebar }}>
        {/* <div> */}
        <div className="components-container">
          <BrowserRouter>
            <Sidebar />
            <Main />
          </BrowserRouter>

        </div>
        {/* </div> */}
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
