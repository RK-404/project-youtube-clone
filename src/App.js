
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/NavBar';
import AboutPage from './components/AboutPage';


function App() {

  // const apiKey = process.env.REACT_APP_API_KEY;

  // fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}`)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => {});

  //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchKey}&type=video&key=${apiKey}

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

