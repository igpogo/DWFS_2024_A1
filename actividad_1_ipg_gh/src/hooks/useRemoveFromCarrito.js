import React, {useContext, useState,useEffect} from 'react';
import {RelatosContext} from '../context/RelatosContext';

export const useRemoveFromCarrito = () =>{
			const cH = useContext(RelatosContext);
			const setCarrito = cH.setCarrito;

			const removeLibro = (libro,carrito) => {
				console.log('useRemoveFromCarrito: libro:',libro);
				console.log('useRemoveFromCarrito: carrito:',carrito);
				console.log('useRemoveFromCarrito: setCarrito:',setCarrito);
				setCarrito(carrito => carrito.filter(l => l !== libro));
			};

			return removeLibro;
	};