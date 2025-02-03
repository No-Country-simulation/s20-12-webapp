import React from 'react';

//base de la card, donde se mostraran los distintos libros
const Card = ({ imageUrl, title, authors, description }) => {

  const bookItem = { title, authors};

  //se agrega el libro a la base de datos
  const addItem = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cart.some(existingItem => existingItem.title === item.title)){
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };


  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">Autor: {authors[0].value}</p>
        <p className="card-description">{description}</p>
        <button type='button' onClick={() => addItem(bookItem)} className="card-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Card;
