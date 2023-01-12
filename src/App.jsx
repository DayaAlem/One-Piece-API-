import React, { useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Squad } from "./pages/Squad";
import { onepieceapi } from "../src/features/onepieceapi";
import { Routes, Route } from "react-router-dom";
import { Nakama } from "./pages/[id]";
import { Navbar } from "./pages/components/Navbar/Navbar";
import { Fruit } from "./pages/Fruit/Fruit";
import { Bateaux } from "./pages/Bateaux/Bateaux";
import { Arcs } from "./pages/Arcs/Arcs";
import { Swords } from "./pages/Swords/Swords";
import { Accueil } from "./pages/Accueil/Accueil";

export default function App() {
  const { data: api = [] } = onepieceapi.useGetCrewsQuery();
  const [toggleState, setToggleState] = useState(false);
  const toggleFonction = () => {
    // console.log("heloworld")
    setToggleState(!toggleState);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Squad" element={<Squad />} />
        <Route path="/crews/:id" element={<Nakama />} />
        <Route path="/fruit" element={<Fruit />} />
        <Route path="/bateaux" element={<Bateaux />} />
        <Route path="/arcs" element={<Arcs />} />
        <Route path="/swords" element={<Swords />} />
      </Routes>
    </div>
  );
}
