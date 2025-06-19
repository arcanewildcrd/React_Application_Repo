import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/login';
import FoundItems from './pages/Founditems';
import LostItems from './pages/Lostitems';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/found-items" element={<FoundItems />} />
        <Route path="/lost-items" element={<LostItems />} />
      </Routes>
    </Router>
  );
}

export default App;
