// import './App.css';
// import Component from './Component.jsx';
// import Context from './context/Context.jsx';
// function App() {
//   return (
//     <Context>
//       <Component />
//     </Context>
//   );
// }

// export default App;

// import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import BroadcastScheduler from './pages/sms/BroadcastScheduler';
import InsightSms from './pages/blast_insight/InsightSMS'
import AddBroadcast from './pages/sms/AddBroadcast';
import PageNotFound from './pages/PageNotFound';


function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);

  // const handleAuth = () => {
  //   setisLoggedIn(!isLoggedIn);
  // };
  // State untuk mengontrol dropdown yang terbuka
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    // Menyembunyikan dropdown jika sudah aktif, atau menampilkan yang diklik
    setActiveDropdown(activeDropdown === index ? null : index);
  };


  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="logo">
            <img src="./assets/logo-oca.svg"></img>
          </div>
          <div className="right-side">
            <button className='notif'>
              <img src="./assets/notif.svg" alt="" />
            </button>
            <button className='help'>
              <img src="./assets/help.svg" alt="" />
            </button>
            <button className='profile'>
              <img src="./assets/profile.svg" alt="" />
            </button>
            <button className='down'>
              <img src="" alt="" />
            </button>
          </div>
        </div>
        <nav className="sidenav">
          <div>
            <ul>
              <Link to="/">
                <li>Dashboard</li>
                <li>Getting Started</li>
                <li>Contacts</li>
              </Link>
            </ul>
            <ul>
              <Link>
                <li>Validation</li>
              </Link>
            </ul>
            <ul>
              <li>
                <button className={'dropdown-btn ${activeDropdown === 0 ? "active : ""}'}
                onClick={() => toggleDropdown(0)}>Voice</button>
              </li>
              <div className='dropdown-container'
              style={{ display: activeDropdown === 0 ? "block" : "none" }}>
                <Link to="/broadcast">
                  <li>Broadcast</li>
                </Link>
                <Link to="/broadcast">
                  <li>Broadcast Scheduler</li>
                </Link>
                <Link to="/broadcast">
                  <li>SMS Usage</li>
                </Link>
                <Link to="/broadcast">
                  <li>Template Usage</li>
                </Link>
              </div>
              <li>
                <button className={'dropdown-btn ${activeDropdown === 1 ? "active : ""}'}
                onClick={() => toggleDropdown(1)}>SMS</button>
              </li>
              <div className='dropdown-container'
              style={{ display: activeDropdown === 1 ? "block" : "none" }}>
                <Link to="/broadcast">
                  <li>Broadcast</li>
                </Link>
                <Link to="/broadcast">
                  <li>Broadcast Scheduler</li>
                </Link>
                <Link to="/broadcast">
                  <li>SMS Usage</li>
                </Link>
                <Link to="/broadcast">
                  <li>Template Usage</li>
                </Link>
              </div>
              <li>
                <button className={'dropdown-btn ${activeDropdown === 2 ? "active : ""}'}
                onClick={() => toggleDropdown(2)}>Email</button>
              </li>
              <div className='dropdown-container'
              style={{ display: activeDropdown === 2 ? "block" : "none" }}>
                <Link to="/broadcast">
                  <li>Broadcast</li>
                </Link>
                <Link to="/broadcast">
                  <li>Broadcast Scheduler</li>
                </Link>
                <Link to="/broadcast">
                  <li>SMS Usage</li>
                </Link>
                <Link to="/broadcast">
                  <li>Template Usage</li>
                </Link>
              </div>
              <li>
                <button className={'dropdown-btn ${activeDropdown === 3 ? "active : ""}'}
                onClick={() => toggleDropdown(3)}>WhatsApp</button>
              </li>
              <div className='dropdown-container'
              style={{ display: activeDropdown === 3 ? "block" : "none" }}>
                <Link to="/broadcast">
                  <li>Broadcast</li>
                </Link>
                <Link to="/broadcast">
                  <li>Broadcast Scheduler</li>
                </Link>
                <Link to="/broadcast">
                  <li>SMS Usage</li>
                </Link>
                <Link to="/broadcast">
                  <li>Template Usage</li>
                </Link>
              </div>
            </ul>
            <ul>
              <li>
                <button className={'dropdown-btn ${activeDropdown === 4 ? "active : ""}'}
                onClick={() => toggleDropdown(4)}>Blast Insight</button>
              </li>
              <div className='dropdown-container'
              style={{ display: activeDropdown === 4 ? "block" : "none" }}>
                <Link to="/insight">
                  <li>Voice</li>
                </Link>
                <Link to="/insight">
                  <li>SMS</li>
                </Link>
                <Link to="/insight">
                  <li>Email</li>
                </Link>
                <Link to="/insight">
                  <li>WhatsApp</li>
                </Link>
              </div>
            </ul>
            <ul>
              <Link to="/">
                <li>Interaction</li>
                <li>File Management</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/broadcast" element={<BroadcastScheduler />} />
            <Route path="/insight" element={<InsightSms />} />
            <Route path="/addscheduler" element={<AddBroadcast />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>          
        </div>
      </div>
    </Router>
  );
}

export default App;
