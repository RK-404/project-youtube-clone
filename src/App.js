import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/NavBar';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<AboutPage/>} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;

