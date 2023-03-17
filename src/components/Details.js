import React from "react";

const Details = ({ starships, showDetails, setShowDetails, cardIndex,setCardIndex}) => {

  const displayDetails = (e) => {
    setShowDetails(!showDetails);
    setCardIndex(null);
  }

  return (
    <div className="details-card">
      <h4>Name: {starships[cardIndex].name}</h4>
      <h4>Model: {starships[cardIndex].model}</h4>
      <h4>Class: {starships[cardIndex].starship_class}</h4>
      <h4>Capacity:{starships[cardIndex].cargo_capacity}</h4>
      <h4>{starships[cardIndex].manufacturer}</h4>
      <h4>Created: {starships[cardIndex].created}</h4>
      <h4>Edited: {starships[cardIndex].edited}</h4>
      <h4>Crew:{starships[cardIndex].crew}</h4>
      <h4>Cost: {starships[cardIndex].cost_in_credits}</h4>
      <button onClick={() => displayDetails()}>Back Home</button>
    </div>
  );
};

export default Details;
