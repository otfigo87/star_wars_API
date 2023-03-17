import React from "react";

const Details = ({ starships }) => {

  return (
    <div className="details-card">
      <h2>Name: {starships[0].name}</h2>
      <h2>Model: {starships[0].model}</h2>
      <h2>Class: {starships[0].starship_class}</h2>
      <h2>Capacity:{starships[0].cargo_capacity}</h2>
      <h2>{starships[0].manufacturer}</h2>
      <h2>Created: {starships[0].created}</h2>
      <h2>Edited: {starships[0].edited}</h2>
      <h2>Crew:{starships[0].crew}</h2>
      <h2>Cost: {starships[0].cost_in_credits}</h2>
      <h3>Back Home</h3>
    </div>
  );
};

export default Details;
