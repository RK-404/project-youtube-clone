import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Video from './components/VideoCard/Video';
import VideoIndex from './components/VideoCard/VideoIndex';

import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [allVideo, setAllVideo] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video`)
    .then((response) => response.json())
    .then((response) => setAllVideo(response.items))
    .catch((error) => console.log(error))
  },[])

  function handleInput(event) {
    setSearchInput(event.target.value)
  }

  function handleSearch(event) {
    event.preventDefault()
    handleInput()
    setSearchInput("")
  }
  
  return (
    <div>
      <Router>
        <NavBar handleInput={handleInput} handleSearch={handleSearch} searchInput={searchInput}/>
        <HomePage/>
        <Routes>
          <Route path='/' element={<VideoIndex allVideo={allVideo} />} />
          <Route path='/videos/:id' element={<Video allVideo={allVideo}/>}/> 
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
