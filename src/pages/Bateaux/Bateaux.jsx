import React, { useState } from "react";
import onepieceapi from "../../features/onepieceapi";
import { Link } from "react-router-dom";
import "../Bateaux/Bateaux.css";

export const Bateaux = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedBateaux, setDisplayedBateaux] = useState([]);
  const { data: Bateaux = [] } = onepieceapi.useGetBoatsQuery();

  // Affichez tous les Bateaux par défaut (avant la recherche)
  React.useEffect(() => {
    setDisplayedBateaux(Bateaux);
  }, [Bateaux]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Si la barre de recherche est vide, affichez tous les Bateaux
    if (!searchTerm) {
      setDisplayedBateaux(Bateaux);
      return;
    }
    // Filtrez displayedBateaux en fonction de la valeur de la barre de recherche
    const filteredBateaux = displayedBateaux.filter((Bateaux) => {
      return Bateaux.french_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    // Mettez à jour l'état du composant avec les personnages filtrés
    setDisplayedBateaux(filteredBateaux);
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
      <div className="contentBateaux">
        {displayedBateaux.map(({ id, french_name }) => (
          <div className="itemBateaux" key={id}>
            <p>{french_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
