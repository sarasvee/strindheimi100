import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-blue text-white text-center p-4">
      <div className="container mx-auto">
        <p className="font-bold text-custom-yellow">Kontakt oss</p>
        <p>Ring meg, Lars Vinde</p>
        <p>Telefon: 930 83 721</p>
        {/* Additional footer content can be added here */}
      </div>
    </footer>
  );
};

export default Footer;
