import React from "react";
import droneImage from "../assets/droneBildeStadion.jpg"; // Adjust the path as necessary
import Sponsors from "./Sponsors";

const HomePage = () => {
  return (
    <div>
      <img
        src={droneImage}
        alt="Drone view of stadium"
        style={{ width: "100%", display: "block" }}
      />
      <Sponsors></Sponsors>
    </div>
  );
};

export default HomePage;
