import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
// import MobileHeader from './Components/MobileHeader/MobileHeader';

function App() {
  return (
    <>
      <div>
        <div className="components-container">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
