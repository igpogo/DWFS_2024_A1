import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {RelatosContext} from '../context/RelatosContext';
import {CarritoHolder} from '../hooks/CarritoHolder';


export const Libro = ({libro}) => {

	const {catalogo,cH} = useContext(RelatosContext);
	const carrito = cH.carrito;
	const addLibro = cH.addLibro;

	console.log("---- el libro que paso a Libro ",libro);
	if ({libro} !== undefined) {
	console.log({libro});

	let { volumeInfo = {}, imageLinks = {}, saleInfo = {}, id, searchInfo = {} } = libro;
  const { title } = volumeInfo;
  imageLinks = volumeInfo.imageLinks;
  const { smallThumbnail } = imageLinks || "";
  const { listPrice = {} } = saleInfo;
  const { amount, currencyCode } = listPrice;
  const { authors} = volumeInfo;
  const { textSnippet} = searchInfo;

  console.log(" -----       Montando el libro ------",title);

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

  function precioContent() {
    if (amount) {
      return <p className = "card-precio">Precio: {amount} {currencyCode}</p>;
    } else {
      return <p className = "card-precio">Precio: No disponible }</p>;
    }
  }
  
  const updateCarrito = (libro) => {
		console.log("Libro: updateCarrito: libro:",libro);
		addLibro({libro:libro});
		console.log("Libro: updateCarrito: carrito:",carrito);
	}

	return (
		<div className = "libro-card">
			<h3 className = "card-titulo">
			Titulo: {(title || "Sin titulo")}
			</h3>
			<img src= {smallThumbnail} alt='Cubierta extraviada' className="card-cubierta" />
			{precioContent()}
			<p className = "card-autor">{autores.autorLabel}: {autores.autorString}</p>
			<p className = "card-SDescr">{textSnippet}</p>
			<Link to={id ? `/libro/${id}` : 'libro/NotFound'}>
                <button>Descubre los menudos detalles</button>
            </Link>
      <	button className = "card-carrito_button" onClick={() => updateCarrito(libro) }> Jala el libro a mi carruaje</button>
      <Link to={id ? `/libros/compra/pago/${id}` : 'libro/NotFound'}>
                <button>Me llevo este tomo</button>
            </Link>
    </div>
		);
	} else{
		<h1>Sin libro</h1>
	}
};