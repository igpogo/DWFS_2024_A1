import React,{useContext} from 'react';
//import '../styles/LibrosStyles.css';
import {RelatosContext} from "../context/RelatosContext";
import {useRetrieveCatalogo} from "../hooks/useRetrieveCatalogo" 
import {Libro} from '../components/Libro';

import {CarritoHolder} from '../hooks/CarritoHolder';


export const Libros = () => {

	const {catalogo, carrito} = useContext(RelatosContext); 
	console.log("ESTE LOG_> ",catalogo);

	return(
			<div className = "libros-encabezado">
				<h2 className = "encabezado-titulo"> Nuestra selección de libros recomendados por nuestros empleados</h2>
				<div className = "encabezado-bigShow"> 


				{
					catalogo.map((libro, index) => (
                            <Libro
                                key={index}
                                libro={libro}
                            />
                        ))
				}
					

					
				</div>
				
				<div className = "libros-Cuerpo">
									
				</div>
			</div>
		);
};


