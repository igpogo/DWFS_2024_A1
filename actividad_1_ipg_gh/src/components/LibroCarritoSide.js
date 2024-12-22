import React from 'react';
import {useCarrito} from '../hooks/UseCarrito';
import {RelatosContext} from '../context/RelatosContext';
import {Link} from "react-router-dom";

export const LibroCarritoSide = ({libro}) => {
	/*
	// extracting info from libro
  const { volumeInfo = {}, imageLinks = {}, saleInfo = {}, id } = libro;
  const { title } = volumeInfo;
  const { smallThumbnail } = imageLinks;
  const { listPrice = {} } = saleInfo;
  const { amount, currencyCode } = listPrice;
	
	if (listPrice === undefined) {
		console.log("NOT FOR SALE ",title," id: ",id);
		amount = "No a la"
		currencyCode ="venta"
	}

	return (
		<div className = "libro-CarritoSide">
			<p className = "CarritoSide-titulo">
			Titulo: {title}
			</p>
			<img src= {smallThumbnail} alt="Cubierta extraviada" className="CarritoSide-cubierta" />
			<p className = "CarritoSide-precio">Precio: {amount} {currencyCode}</p>
			<Link to={`/libro/${id}`}>
                <button>Descubre los menudos detalles</button>
            </Link>
      <button className = "CarritoSide-Remove" onClick = {(libro)=> useCarrito(libro,"remove")}>Desecha este tomo</button>
    </div>
		
		);*/
};