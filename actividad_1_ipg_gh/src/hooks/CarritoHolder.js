import React, {useContext, useState} from 'react';
import {RelatosContext} from '../context/RelatosContext';

export const CarritoHolder = () => {
	const [carrito, setCarrito] = useState([]);
	
	const addLibro = (libro) => {
		
		if (carrito.length === 0) {
			let carr = [];
			setCarrito(carrito);
		}
		console.log("CarritoHolder: libro: ",libro);
    setCarrito([...carrito, libro.libro]);
    console.log("CarritoHolder: carrito: ",carrito);
  };

  const removeLibro = (libro) => {
    setCarrito(carrito.filter(l => libro !== l));

  };
	
	
	return {carrito,addLibro,removeLibro}
	
	};