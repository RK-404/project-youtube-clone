import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Video from "./components/VideoCard/Video";
import Modal from "./components/Modal";

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [allVideo, setAllVideo] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleInput(event) {
    setSearch(event.target.value);
  }

  function handleSearch() {
    if (search) {
      fetch(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${apiKey}&part=snippet&type=video&maxResults=20`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((response) => {
        if (!response.items.length) {
          setShowModal(true);
        }
        else {
          setAllVideo(response.items);
          setShowModal(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowModal(true);
      });
    }
    setSearch("");
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      handleSearch();
    }
  }

  function resetVideos() {
    setAllVideo([]);
  }

  return (
    <div>
      <Router>
        <NavBar resetVideos={resetVideos} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleUserInput={handleInput}
                handleClick={handleSearch}
                handleEnter={handleEnter}
                userInput={search}
                videos={allVideo}
                showModal={showModal}
              />
            }
          />

          {/* <Route path="*" element={<Modal setShowModal={setShowModal} />} /> */}
          <Route path="/videos/:id" element={<Video allVideo={allVideo} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
