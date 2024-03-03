import React from "react";
import droneImage from "../assets/droneBildeStadion.png"; // Adjust the path as necessary
import globeFootball from "../assets/GlobeFootball.png"; // Adjust the path as necessary
import Sponsors from "./Sponsors";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Drone Image */}
      <img
        src={droneImage}
        alt="Drone view of stadium"
        className="w-full block"
      />

      {/* Sponsors Component */}
      <Sponsors />
    </div>
  );
};

export default HomePage;
