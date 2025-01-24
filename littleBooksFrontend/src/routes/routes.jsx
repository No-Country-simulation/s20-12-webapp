import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import Home from '../pages/home';
import Cart from '../pages/carrito';

const AppRoutes = () => {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Cart />} />
      </Routes>
  );
};

export default AppRoutes;