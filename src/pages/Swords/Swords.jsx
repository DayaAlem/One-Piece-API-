import React, { useState } from "react";
import { onepieceapi } from "../../features/onepieceapi";
import { Link } from "react-router-dom";
import "../Swords/Swords.css";

export const Swords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedSwords, setDisplayedSwords] = useState([]);
  const { data: Swords = [] } = onepieceapi.useGetSwordsQuery();

  // Affichez tous les Swords par défaut (avant la recherche)
  React.useEffect(() => {
    setDisplayedSwords(Swords);
  }, [Swords]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Si la barre de recherche est vide, affichez tous les Epée
    if (!searchTerm) {
      setDisplayedFruits(Swords);
      return;
    }
    // Filtrez displayedSwords en fonction de la valeur de la barre de recherche
    const filteredSwords = displayedSwords.filter((Swords) => {
      return Swords.french_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    // Mettez à jour l'état du composant avec les personnages filtrés
    setDisplayedSwords(filteredSwords);
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
      <div className="contentSwords">
        {displayedSwords.map(({ id, roman_name, type, description }) => (
          <div className="itemSwords" key={id}>
            <p className="titleSwords">{roman_name}</p>
            <p className="type">{type}</p>
            <p className="description">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
