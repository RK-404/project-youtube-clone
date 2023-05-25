import './App.css';
import HomePage from './components/HomePage';

function App() {

  fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => {});

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
