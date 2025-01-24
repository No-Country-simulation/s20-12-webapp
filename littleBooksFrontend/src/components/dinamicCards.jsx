import React from 'react';
import { useSearch } from '../hook/SearchContext'; 
import Card from "./card";

const DinamicCards= () => {
  const { results } = useSearch(); 

  return (
    <div className='cart'>
      {results.length === 0 ? (
        <p>No se encontraron resultados</p> 
      ) : (
        <div className='dinamic-cart-content'>
          {results.map((result, index) => (
            <Card
            key={index}
            imageUrl={result.imageUrl} 
            title={result.title}
            year={result.year}
            authors={result.authors} 
            stock={result.stock} 
            description={result.description}
          />
          ))}
        </div>
      )}
    </div>
  );
};

export default DinamicCards;
