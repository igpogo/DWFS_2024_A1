import React,{useContext} from 'react';
//import '../styles/CarritoStyles.css';
/*import {LibroCarritoSide} from "../components/LibroCarritoSide"*/
import {RelatosContext} from "../context/RelatosContext";
import {useCarrito} from "../hooks/useCarrito"
import {Link} from "react-router-dom";



export const CarritoSide = () => {
	const carrito = useCarrito()
	console.log("carritoSide: carrito: ",carrito);
}/***
	return(
		<div className = "carritoSide">
			{carrito.length > 0 ? (
				<div className ="carritoSide-empty">
					<p className="empty-label"> Aquí vendrán a mostrarse los libros que tu elección disponga</p>
				</div>
				):(
					carrito.map((libro,key) => (
						<div>
						< compraCarritoButton />

						<LibroCarritoSide key = {index} libro = {libro} />
						<Link to={`/libros/compra/`}>
	            <button>Descubre los menudos detalles</button>
	          </Link>
	          <button className = "carritoSide-quita" onClick = {(libro)=> useCarrito(libro,"remove")}>Desecha este tomo</button>
	          < compraCarritoButton />
	          </div>
					))
				
			}

		</div>
		

		)

}**/