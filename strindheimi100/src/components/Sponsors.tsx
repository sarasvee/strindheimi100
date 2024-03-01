import React from "react";

import borealLogo from "../assets/sponsors/borealLogo.jpeg";
import bilradiospasialistenLogo from "../assets/sponsors/bilradiospasialistenLogo.jpeg";
import BewiLogo from "../assets/sponsors/BewiLogo.jpeg";
import LeangenLogo from "../assets/sponsors/LeangenLogo.jpeg";
import AbesLogo from "../assets/sponsors/AbesLogo.jpeg";
import TrenHerLogo from "../assets/sponsors/TrenHerLogo.png";
import MachdayLogo from "../assets/sponsors/MachdayLogo.png";
import TrondelagKraftLogo from "../assets/sponsors/TrondelagKraftLogo.jpeg";
import TobbLogo from "../assets/sponsors/TobbLogo.jpeg";
import CoopLogo from "../assets/sponsors/CoopLogo.jpeg";
import BravidaLogo from "../assets/sponsors/BravidaLogo.jpeg";
import AdressaLogo from "../assets/sponsors/AdressaLogo.jpeg";
import Arti7Logo from "../assets/sponsors/Arti7Logo.jpeg";
import VintervollLogo from "../assets/sponsors/VintervollLogo.jpeg";

// Define the sponsor type
type Sponsor = {
  name: string;
  logo: string; // Path to the logo image
  url: string; // Sponsor's website
};

// Example array of sponsors
const sponsors: Sponsor[] = [
  {
    name: "Boreal",
    logo: borealLogo, // Adjust the path as necessary
    url: "https://www.boreal.no/forside/",
  },
  {
    name: "Bilradio Spesialisten AS",
    logo: bilradiospasialistenLogo, // Adjust the path as necessary
    url: "https://bilradiospes.no/",
  },
  {
    name: "BEWI",
    logo: BewiLogo, // Adjust the path as necessary
    url: "https://bewi.com/?lang=no",
  },
  {
    name: "Leangen",
    logo: LeangenLogo, // Adjust the path as necessary
    url: "https://leangenbolig.no/",
  },
  {
    name: "Abes",
    logo: AbesLogo, // Adjust the path as necessary
    url: "https://www.abes-trafikkskole.com/A",
  },
  {
    name: "TrenHer",
    logo: TrenHerLogo, // Adjust the path as necessary
    url: "https://trenher.no/",
  },
  {
    name: "Machday",
    logo: MachdayLogo, // Adjust the path as necessary
    url: "https://www.matchday.no/",
  },
  {
    name: "Trøndelag Kraft",
    logo: TrondelagKraftLogo, // Adjust the path as necessary
    url: "https://www.trondelagkraft.no/strom/",
  },
  {
    name: "Tobb",
    logo: TobbLogo, // Adjust the path as necessary
    url: "https://tobb.no/",
  },
  {
    name: "Coop",
    logo: CoopLogo, // Adjust the path as necessary
    url: "https://coop.no/",
  },
  {
    name: "Bravida",
    logo: BravidaLogo, // Adjust the path as necessary
    url: "https://www.bravida.no/",
  },
  {
    name: "Adressavisen",
    logo: AdressaLogo, // Adjust the path as necessary
    url: "https://www.adressa.no/",
  },
  {
    name: "Arti7",
    logo: Arti7Logo, // Adjust the path as necessary
    url: "https://arti7.no/",
  },
  {
    name: "Vintervoll",
    logo: VintervollLogo, // Adjust the path as necessary
    url: "https://www.vintervoll.no/",
  },
];

const Sponsors: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 transition-shadow duration-300 bg-white rounded-lg hover:shadow-lg transform hover:scale-105" // Added transform and hover:scale-105 for the outward movement on hover
          >
            <div className="p-4 flex justify-center items-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 mx-auto"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
