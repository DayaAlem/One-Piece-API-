import React, { useState } from "react";
import onepieceapi from "../../features/onepieceapi";
import "../Arcs/Arcs.css";

export const Arcs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: Arcs = [] } = onepieceapi.useGetArcsQuery();
  const [displayedArcs, setDisplayedArcs] = useState([]);

  // Affichez tous les Arcs par défaut (avant la recherche)
  React.useEffect(() => {
    setDisplayedArcs(Arcs);
  }, [Arcs]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Si la barre de recherche est vide, affichez tous les Bateaux
    if (!searchTerm) {
      setDisplayedArcs(Arcs);
      return;
    }
    // Filtrez displayedBateaux en fonction de la valeur de la barre de recherche
    const filteredArcs = displayedArcs.filter((Arcs) => {
      return Arcs.arc_title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // Mettez à jour l'état du composant avec les personnages filtrés
    setDisplayedArcs(filteredArcs);
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
      <div className="contentArcs">
        {displayedArcs.map(({ id, arc_title, arc_description }) => (
          <div className="itemArcs" key={id}>
            <p className="arcTitle">{arc_title}</p>
            <p className="descriptionArc">{arc_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
