import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min"

// Import pages
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import PortfolioPage from './pages/portfolioPage';
import ResumePage from './pages/resumePage';
import ContactPage from './pages/contactPage';
import BackendPage from './pages/backendPage';
import FrontendPage from './pages/frontendPage';
import GameDevPage from './pages/gameDevPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Portfolio" element={<PortfolioPage/>} />
        <Route path="/Resume" element={<ResumePage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/Backend" element={<BackendPage/>} />
        <Route path="/Frontend" element={<FrontendPage/>} />
        <Route path="/GameDev" element={<GameDevPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
