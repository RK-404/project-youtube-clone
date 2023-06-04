import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Video from "./components/VideoCard/Video";
import Modal from "./components/Modal";

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [allVideo, setAllVideo] = useState([]);
  const [search, setSearch] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  const [showModal, setShowModal] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  // useEffect(() => {
  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=20`)
  //   .then((response) => response.json())
  //   .then((response) => setAllVideo(response.items))
  //   .catch((error) => console.log(error))
  // },[]);

  function handleInput(event) {
    setSearch(event.target.value);
  }

  function handleSearch(event) {
    // event.preventDefault();
    if (search) {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${apiKey}&part=snippet&type=video&maxResults=20`
      )
        .then((response) => response.json())
        .then((response) => setAllVideo(response.items))
        .catch((error) => console.log(error));
      setShowModal(false);
      setErrorStatus(400);
    }
    setSearch("");
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      handleSearch();
    }
  }

  return (
    <div>
      <Router>
        <NavBar />
        {/* <Modal
          setShowModal={setShowModal}
          errorStatus={errorStatus}
          showModal={showModal}
        /> */}
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
              />
            }
          />
          <Route
            path="*"
            element={
              <Modal
                errorStatus={errorStatus}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            }
          />
          <Route path="/videos/:id" element={<Video allVideo={allVideo} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {/* {errorStatus && <Modal />} */}
        {/* {errorStatus === 400 && <Modal />}
         */}
      </Router>
    </div>
  );
}

export default App;
