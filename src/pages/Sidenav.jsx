import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BroadcastScheduler from './pages/sms/BroadcastScheduler';
import InsightSms from './pages/blast_insight/InsightSms'
import PageNotFound from './pages/PageNotFound';


function Sidenav() {
    return (
        <Router>
            <div className="App">
                <nav className="sidenav">
                    <div>
                        <ul>
                            <Link to="/">
                                <li>Dashboard</li>
                            </Link>
                            <Link to="/broadcast">
                                <li>Broadcast Scheduler</li>
                            </Link>
                            <Link to="/insight">
                                <li>SMS</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
                <div className='content'>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/broadcast" element={<BroadcastScheduler />} />
                        <Route path="/insight" element={<InsightSms />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Sidenav;
