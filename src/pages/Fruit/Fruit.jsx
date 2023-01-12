import React, { useState } from "react";
import { onepieceapi } from "../../features/onepieceapi";
import { Link } from "react-router-dom";
import "../Fruit/Fruit.css";

export const Fruit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedFruits, setDisplayedFruits] = useState([]);
  const { data: Fruits = [] } = onepieceapi.useGetFruitsQuery();

  // Affichez tous les fruit par défaut (avant la recherche)
  React.useEffect(() => {
    setDisplayedFruits(Fruits);
  }, [Fruits]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Si la barre de recherche est vide, affichez tous les fruits
    if (!searchTerm) {
      setDisplayedFruits(Fruits);
      return;
    }
    // Filtrez displayedFruits en fonction de la valeur de la barre de recherche
    const filteredFruits = displayedFruits.filter((Fruits) => {
      return Fruits.french_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    // Mettez à jour l'état du composant avec les personnages filtrés
    setDisplayedFruits(filteredFruits);
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
      <div className="contentfruit">
        {displayedFruits.map(({ id, french_name, type, description }) => (
          <div className="itemfruit" key={id}>
            <p className="titlefruit">{french_name}</p>
            <p className="type">{type}</p>
            <p className="description">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
