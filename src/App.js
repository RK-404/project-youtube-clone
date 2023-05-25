import './App.css';
import Header from './components/Header';

function App() {

  fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => {});

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
