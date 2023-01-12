import React from "react";
import "../Navbar/Navbar.css";
import { Fruit } from "../../Fruit/Fruit";
import { Bateaux } from "../../Bateaux/Bateaux";
import { Swords } from "../../Swords/Swords";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Marine-Repport</h1>
      </Link>
      <div className="container">
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <Link to="/Squad" className="Squad">
          Equipage
        </Link>
        <Link to="/Fruit" className="fruit">
          Fruit
        </Link>
        <Link to="/Bateaux" className="bateaux">
          Bateaux
        </Link>
        <Link to="/Arcs" className="arcs">
          Arcs
        </Link>
        <Link to="/Swords" className="swords">
          Epée
        </Link>
      </div>
    </div>

    /* <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Squad />} />
          <Route path="/" element={<Fruit />} />
        </Routes>
      </BrowserRouter>
    </div> */

    /*  <div>
      <a href="/">
        <h1>Marines-Repport</h1>
      </a>
    </div>   */
  );
};
