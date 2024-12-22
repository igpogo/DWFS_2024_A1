import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {RelatosContext} from '../context/RelatosContext';
import {Libro} from '../components/Libro';
import {useNavigate} from "react-router";
import {useRemoveFromCarrito} from "../hooks/useRemoveFromCarrito";


export const CarritoDetails = () => {
	const {catalogo,cH} = useContext(RelatosContext);
	const carrito = cH.carrito;
	const setCarrito = cH.setCarrito;
	const addLibro = cH.addLibro;
	//const removeLibro = cH.removeLibro;

	
	
	const navigate = useNavigate();
	
	console.log("CarritoDetails: carrito: ", carrito)

	const comprarTodoelCarro = () =>{

		// sumar todo los precios y pasar al pago 
		navigate("/libros/compra/carrito/pago");
	};
	const comprarLibro = (libro) =>{

		// pasar al pago con el coste del libro seleccionado
		navigate("/libros/compra/pago/${libro.id}");
	};

	const remLibro = (libro) => {
		
				//removeLibro(libro);
			
	};

	if (carrito.length === 0){ 
		return(
			<div className ="carrito-VACIO">
				<hr />
				<br />
				<h3 className ="VACIO-mensaje"> Vuestro carruaje está más limpio que las tripas de un perro viejo</h3>
				<hr />
				<br />
				</div>
			);
	}else{
		return (
			<div className = "CarritoDetails">
				<h2 className = "CarritoDetails-titulo">
				Tú carruaje con sus tomos
				</h2>
				<br />
				<button className ="compra-todo" onClick = {comprarTodoelCarro}>Portalos todo</button>
				<br />

				{console.log(" CarritoDetails: before map: carrito:",carrito)}
				
        {
					carrito.map((libro, index) => (
														<>
                            <Libro
                                key={index}
                                libro={libro}
                            />
              							<br />
            								<button className ="compra-quite" onClick = {remLibro(libro)}>Quita el libro</button>
                            <hr />
                            </>
                        ))
				}
                            

				
				
	      <button className ="compra-todo" onClick = {comprarTodoelCarro}>Portalos todo</button>
	    </div>
		);
	}
};