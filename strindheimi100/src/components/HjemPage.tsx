import React from "react";
import droneImage from "../assets/droneBildeStadion.jpg"; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div>
      <img
        src={droneImage}
        alt="Drone view of stadium"
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
};

export default HomePage;
