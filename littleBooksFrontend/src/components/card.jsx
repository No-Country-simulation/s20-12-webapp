import React from 'react';

//base de la card, donde se mostraran los distintos libros
const Card = ({ imageUrl, title, author, stock, description }) => {

  const bookItem = { title, author, stock};

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
        <p className="card-author">Autor: {author}</p>
        <p className="card-stock">Stock: {stock}</p>
        <p className="card-description">{description}</p>
        <button type='button' onClick={() => addItem(bookItem)} className="card-button">Agregar</button>
      </div>
    </div>
  );
};

export default Card;
