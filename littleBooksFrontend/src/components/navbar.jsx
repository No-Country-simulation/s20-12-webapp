import React, { useState } from 'react';
import { useSearch } from '../hook/SearchContext';
import '../styles/home.css';
import { paletas } from '../utils/paletas';

const Navbar = () => {
  // Cambia la paleta de colores según el género de libro
  const cambiarPaleta = (nombrePaleta) => {
    const paleta = paletas[nombrePaleta];
    for (const variable in paleta) {
      document.documentElement.style.setProperty(variable, paleta[variable]);
    }
  };

  const [searchTerm, setSearchTerm] = useState(""); 
  const { setResults } = useSearch();

 // busqueda por titulo o autor.
 const handleButtonForm = async (e) => {
    e.preventDefault();

  if (!searchTerm.trim()) {
    console.error("Por favor ingresa un término de búsqueda");
    return;
  }

  try {
    const response = await fetch(`https://s20-12-webapp.onrender.com/books/by-title-or-author/${searchTerm}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// busqueda por genero
const handleSearchByGenre = async (genre) => {

  setSearchTerm("");  

  try {
    const response = await fetch(`https://s20-12-webapp.onrender.com/books/by-genre/${genre}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setResults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handleButtonClick = (genre) => {
  cambiarPaleta(genre);
  handleSearchByGenre(genre); 
};

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <div>
          <li className="Horror">
            <button type="button" onClick={() => handleButtonClick("Horror")}>Terror</button>
          </li>
          <li className="Crime">
            <button type="button" onClick={() => handleButtonClick("Crime")}>Crimen</button>
          </li>
        </div>
        <div>
          <li className="Romance">
            <button type="button" onClick={() => handleButtonClick("Romance")}>Romance</button>
          </li>
          <li className="ScienceFiction">
            <button type="button" onClick={() => handleButtonClick("ScienceFiction")}>Ciencia Ficcion</button>
          </li>
        </div>
        <div>
          <li className="Adventure">
            <button type="button" onClick={() => handleButtonClick("Adventure")}>Aventura</button>
          </li>
          <li className="HistorcalFiction">
            <button type="button" onClick={() => handleButtonClick("HistorcalFiction")}>Ficción Histórica</button>
          </li>
        </div>
        <div>
          <li className="Mistery">
            <button type="button" onClick={() => handleButtonClick("Mistery")}>Misterio</button>
          </li>
          <li className="Drama">
            <button type="button" onClick={() => handleButtonClick("Drama")}>Drama</button>
          </li>
        </div>
        <div>
          <li className="Fantasy">
            <button type="button" onClick={() => handleButtonClick("Fantasy")}>Fantasía</button>
          </li>
          <li className="Philosophy">
            <button type="button" onClick={() => handleButtonClick("Philosophy")}>Filosofía</button>
          </li>
        </div>
        <div>
          <li className="MagicalRealism">
            <button type="button" onClick={() => handleButtonClick("MagicalRealism")}>Realismo Mágico</button>
          </li>
        </div>
        <form onSubmit={handleButtonForm}>
          <li>
            <input
              type="text"
              placeholder="Ingresa el título o el autor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" onClick={() => handleButtonForm(searchTerm)}>Buscar</button>
          </li>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
