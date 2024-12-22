import React, {useContext,useEffect, useState} from 'react';
import {RelatosContext} from '../context/RelatosContext';

export const useCarrito = (libro, action) => {
	const [carrito, setCarrito] = useState([]);

	useEffect((libro,action) => {
			if (action === "add"){
				/*
				* set that book as save in the cart
				*/
				carrito.push(libro);
				setCarrito (carrito);
			}
			if (action === "remove"){
				const newCarrito = carrito.filter( lib => lib !== libro)
				setCarrito (newCarrito);
			}
		}
		,[]);
	return carrito;
	};