import React from "react";
import { Tile } from "react-easy-image";
import ace from "./AD.png";
import './styleDestination.css';

function Destination() {

  const tileConfig = {
    containerWidth: "960px",
    containerHeight: "730px",
    imgWidth: "960px",
    imgHeight: "640px",
    capFontSize: "20px",
    chevronStyle: 2,
    chevronScale: 1.6,
    chevronColor: "whitesmoke",
    borderRadius: "10px",
  };
  return (

    <>
      <h1 className="heading1">Popular Destinations</h1>
      <h3 className="heading3">Most popular destinations around the world, from historical places to natural wonders.</h3>
      <div className="App">
        <div className="image-container">
            <img src={ace} alt="" />
            <div className="overlay-text">
              <h1>Monument of Berlin</h1>
            </div>
        </div>
        <div className="image-container">
            <img src={ace} alt="" />
            <div className="overlay-text">
              <h1>Monument of Berlin</h1>
            </div>
        </div>
        <div className="image-container">
            <img src={ace} alt="" />
            <div className="overlay-text">
              <h1>Monument of Berlin</h1>
            </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
