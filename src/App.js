import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Details from './components/Details';
import axios from "axios";
import "./App.css";

function App() {

  const [starships, setStarships] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/`)
      .then((res) => setStarships(res.data.results))
      .catch((err) => console.log(err));
  }, []);

   console.log(starships)
  

  return (
    <div className="App">
      <Header />
      <div className="card-list">
        {!showDetails &&
          starships.map((starship) => (
            <Card key={starship.name} starship={starship} />
          ))}
        {showDetails && <Details starships={starships} />}
      </div>
    </div>
  );
}

export default App;
