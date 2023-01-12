import { Router, useParams } from "react-router-dom";
import onepieceapi from "..//features/onepieceapi";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../pages/id.css";
import { SearchBar } from "../pages/components/search/SearchBar";

export const Nakama = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPersonnages, setDisplayedPersonnages] = useState([]);
  const params = useParams();
  const myId = params.id.toString() || "";
  const { data: personnages = [] } = onepieceapi.useGetCharactersQuery(myId);

  // Affichez tous les personnages par défaut (avant la recherche)
  React.useEffect(() => {
    setDisplayedPersonnages(personnages);
  }, [personnages]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Si la barre de recherche est vide, affichez tous les personnages
    if (!searchTerm) {
      setDisplayedPersonnages(personnages);
      return;
    }
    // Filtrez displayedPersonnages en fonction de la valeur de la barre de recherche
    const filteredPersonnages = displayedPersonnages.filter((personnage) => {
      return personnage.french_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    // Mettez à jour l'état du composant avec les personnages filtrés
    setDisplayedPersonnages(filteredPersonnages);
  };

  return (
    <div>
      {/* Formulaire de recherche */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      <div className="content">
        {displayedPersonnages.map(({ id, french_name, bounty }) => (
          <div className="item2" key={id}>
            <p className="wanted">WANTED</p>
            <p className="deadlive">DEAD OR ALIVE</p>
            <p className="titlenakama">{french_name}</p>
            <p className="price">{bounty}</p>
            <p className="marine">MARINE</p>
          </div>
        ))}
      </div>
    </div>
  );
};
