import React,{useContext} from 'react';
//import '../styles/LibrosStyles.css';
import {RelatosContext} from "../context/RelatosContext";
import {useRetrieveCatalogo} from "../hooks/useRetrieveCatalogo" 
import {Libro} from '../components/Libro';

import {useCarritoHolder} from '../hooks/useCarritoHolder';



export const Libros = () => {


	const {catalogo, cH} = useContext(RelatosContext); 
	const addLibro = cH.addLibro;
	const carrito = cH.carrito;
	console.log("ESTE LOG_> ",catalogo);

	const updateCarrito = (libro) => {
		console.log("Libro: updateCarrito: libro:",libro);
		addLibro({libro:libro});
		console.log("Libro: updateCarrito: carrito:",carrito);
}

	return(
			<div className = "libros-encabezado">
				<h2 className = "encabezado-titulo"> Nuestra selección de libros recomendados por nuestros empleados</h2>
				<div className = "encabezado-bigShow"> 


				{
					catalogo.map((libro, index) => (
					<>
                            <Libro
                                key={index}
                                libro={libro}
                            />
                            <	button className = "card-carrito_button" onClick={() => updateCarrito(libro) }> Jala el libro a mi carruaje</button>
                            </>
                        ))

				}
					

					
				</div>
				
				<div className = "libros-Cuerpo">
									
				</div>
			</div>
		);
};


