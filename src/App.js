import './App.css';
import React from "react";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';

function App() {

  // const apiKey = process.env.REACT_APP_API_KEY;

  // fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}`)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => {});

  //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchKey}&type=video&key=${apiKey}

  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <About/>
    </div>
  );
}

export default App;
