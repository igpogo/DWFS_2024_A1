import React, {useContext} from 'react';
import {RelatosContext} from '../context/RelatosContext';
import {CarritoHolder} from '../hooks/CarritoHolder';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

export const LibroDetails = () => {
	const {catalogo,cH} = useContext(RelatosContext);
	const carrito = cH.carrito;
	const addLibro = cH.addLibro;
	const { libroId } = useParams();
	
	
	console.log("libroDetails: Array.isArray(catalogo):",Array.isArray(catalogo));
	console.log("libroDetails: libroId:",libroId);
	const libro = catalogo.find(l => l.id === libroId);

	let { volumeInfo = {}, imageLinks = {}, saleInfo = {}, id, searchInfo = {} } = libro;
  const { title } = volumeInfo;
  imageLinks = volumeInfo.imageLinks;
  const { thumbnail } = imageLinks;
  const { listPrice = {} } = saleInfo;
  const { amount, currencyCode } = listPrice;
  const { authors} = volumeInfo;
  const { textSnippet} = searchInfo;

  function precioContent() {
    if (amount) {
      return <p className = "details-precio">Precio: {amount} {currencyCode}</p>;
    } else {
      return <p className = "details-precio">Precio: No disponible }</p>;
    }
  }


	const autoresFunc = (authors) => {
		let autorLabel = 'No disponible';
		let autorString = 'No disponible';
		if (authors.length > 0) {
			if (authors.length > 1){
				autorString = authors.join(", ");
				autorLabel = "Autores";
			}else{
				autorString = authors[0];
				autorLabel = "Autor";
			}
		}
		return {autorLabel,autorString}
	}		
	const autores = autoresFunc(authors);

	const updateCarrito = (libro) => {
		console.log("LibroDetails: updateCarrito: libro:",libro);
		addLibro({libro});
		console.log("LibroDetails: updateCarrito: carrito:",carrito);
	}

	return (
			<div className = "LibroDetails">
				<div className = "libro-details">
			<h3 className = "details-titulo">
			Titulo: {libro.volumeInfo.title}
			</h3>
			<img src= {thumbnail} alt="La cubierta que viste el libro {libro.volumeInfo.title}" className="card-cubierta" />
			{precioContent()}
			<p className = "details-autor">{autores.autorLabel}: {autores.autorString}</p>
			<p className = "details-description">Descripción:<br /> {libro.volumeInfo.description}</p>
			<Link to={`/libros/compra/pago/${libro.id}`}>
          <button>Adquirir</button>
      </Link>
      <	button className = "details-carrito_button" onClick={() => updateCarrito(libro) }> Jala el libro a mi carruaje</button>
    </div>
			</div>
		);

} 
