import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Details from './components/Details';
import axios from "axios";
import "./App.css";

function App() {

  const [starships, setStarships] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [cardIndex, setCardIndex] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/`)
      .then((res) => setStarships(res.data.results))
      .catch((err) => console.log(err));
  }, [showDetails]);


   const handleClick = (index) => {
    setShowDetails(!showDetails)
    setCardIndex(index)
    // console.log(index)
   }
  
  return (
    <div className="App">
      <Header />
      <div className="card-list">
        {!showDetails ? (
          starships.map((starship, i) => (
            <Card
              key={i}
              starship={starship}
              handleClick={handleClick}
              id={i}
            />
          ))
        ) : (
          <Details
            starships={starships}
            cardIndex={cardIndex}
            setCardIndex={setCardIndex}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;
