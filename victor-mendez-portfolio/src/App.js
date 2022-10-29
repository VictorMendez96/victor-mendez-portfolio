import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import pages
import MainLayout from './layouts/MainLayout';
import 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>} />
        <Route path="/" element={<MainLayout/>} />
        <Route path="/" element={<MainLayout/>} />
        <Route path="/" element={<MainLayout/>} />
        <Route path="/" element={<MainLayout/>} />
        <Route path="/" element={<MainLayout/>} />
      </Routes>
    </Router>
  );
}

export default App;
