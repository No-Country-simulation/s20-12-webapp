import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/cart.png";

import "../styles/carrito.css";

const Carrito = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Envio de pedidos a la base de datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const transformedCart = cart.map(item => ({
      id: item.id,
      title: item.title,
      cant: item.cantidad, 
    }));

    try {
      const response = await fetch("https://pequenos-libros-publico.onrender.com/ShoppingCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: `${formData.nombre} ${formData.apellido}`,
          email: formData.email,
          books: transformedCart,
        }),
      });
      console.log("datos enviados:", formData, transformedCart);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      window.confirm("Su pedido ha sido realizado con éxito, muchas gracias. \n En breve recibirá un email de la tienda.");
      localStorage.removeItem('cart');
      setCart([]);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = storedCart.map(item => ({
      ...item,
      cantidad: item.cantidad || 1,
    }));
    
    setCart(updatedCart);
  }, []);

  // Función para actualizar la cantidad de un producto específico
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].cantidad = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  
  };

  const handleSubstracBook = (index) => {
    const product = cart[index];
    if (product.cantidad > 1) {
      updateQuantity(index, product.cantidad - 1);
    } else {
      const confirmDelete = window.confirm(`¿Seguro que deseas eliminar "${product.title}" del carrito?`);
      if (confirmDelete) {
        removeBook(index);
      }
    }
  };

  const handleAddBook = (index) => {
    const product = cart[index];
    updateQuantity(index, product.cantidad + 1);
  };

  const removeBook = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  
  };

  return (
    <div className="container">
      <div className="list">
        <img src={cartImg} alt="carrito de compras" className="img-carrito" />
        <h2>Tu pedido:</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="list-item-cart">
                <h4>{item.title}</h4>
                <button className="btn" type="button" onClick={() => handleSubstracBook(index)} aria-live={`Restar una unidad de ${item.title}`}>-</button>
                <h5 className="cantidad">{item.cantidad}</h5>
                <button className="btn" type="button" onClick={() => handleAddBook(index)} aria-live={`Agregar una unidad de ${item.title}`}>+</button>
              </div>
            ))
          )}
        </div>
        <button className="btn-compra" type="button">
          <Link to="/">Seguir comprando</Link>
        </button>
      </div>
      <div className="form-conteiner">
        <h2>Informacion de entrega</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre"> Nombre </label>
          <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} />

          <label htmlFor="apellido"> Apellido </label>
          <input type="text" name="apellido" required value={formData.apellido} onChange={handleChange} />

          <label htmlFor="email"> Email </label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />

          <button type="submit">Confirmar pedido</button>
        </form>
      </div>
    </div>
  );
};

export default Carrito;
