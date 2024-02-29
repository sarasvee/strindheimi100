import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import HjemPage from "./components/HjemPage"; // Import your Visjoner page component
import VisjonerPage from "./components/VisjonerPage"; // Import your Visjoner page component
import AktivitetPage from "./components/AktivitetPage"; // Import your Visjoner page component
import MedlemmerPage from "./components/MedlemmerPage"; // Adjust the path based on your file structure
import KontaktPage from "./components/KontaktPage"; // Adjust the path based on your file structure

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HjemPage />} />
        <Route path="/visjoner" element={<VisjonerPage />} />
        <Route path="/aktiviter" element={<AktivitetPage />} />
        <Route path="/medlemmer" element={<MedlemmerPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
    </div>
  );
}

export default App;
