import React from 'react';
import '../styles/CarritoStyles.css';
import {Libro} from "../components/LibroDetails"
import {RelatosContext} from "../context/RelatosContext";
import {useCarritoHolder,removeFromCarrito} from "../hoks/useCarritoHolder"
import {Link} from "react-router-dom";

export const Carrito = () => {
	const {catalogo,cH} = useContext(RelatosContext);
	const carrito = cH.carrito;
	const addLibro = cH.addLibro;
	const removeLibro = cH.removeLibro;

	return(
		<div className = "carrito">
			{carrito.length > 0 ? (
				<div className ="carrito-empty">
					<p className="empty-label"> Aquí vendrán a mostrarse los libros que tu elección disponga</p>
				</div>
				):(
				< compraCarritoButton />

				carrito.map((libro,key) => (
						<Libro 
							key = {index}
							libro = {libro} 
							/>
							<Link to={`/libros/compra/`}>
                <button>Descubre los menudos detalles</button>
            </Link>
            <button className = "carrito-quita" onClick = {()=> removeFromCarrito({libro})}>Desecha este tomo</button>
            <link>
					)
					< compraCarritoButton />

				;);}
		</div>

		);


};

const compraCarritoButton = () => {
	return (
		<Link to={`/libros/compra/carrito`}>
                <button className = "compraCarrito-button">Adquiere los libros en tu carruaje</button>
            </Link>
	);
};
