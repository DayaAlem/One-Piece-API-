import React, { useState } from "react";
import { Link } from "react-router-dom";
import onepieceapi from "../features/onepieceapi";
import "../pages/Squad.css";

export const Squad = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPersonnages, setDisplayedPersonnages] = useState([]);
  const { data: personnages = [] } = onepieceapi.useGetCrewsQuery();

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
        {displayedPersonnages.map(
          ({ id, french_name, total_prime, number, status, affiliation }) => (
            <div className="item" key={id}>
              <Link to={`/crews/${id}`}>
                <p className="titlesquad">{french_name}</p>
                <p className="totalprime">
                  Prime Total de L'équipage : {total_prime}
                </p>
                <p className="number">{number} Nakama</p>
                <p className="status">Status de L'équipage : {status}</p>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};
