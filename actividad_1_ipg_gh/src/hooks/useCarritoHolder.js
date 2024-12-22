import { useState,useEffect} from 'react';


export const useCarritoHolder = () => {
	const [carrito, setCarrito] = useState([]);
	
	const addLibro = (libro) => {
		
		if (carrito.length === 0) {
			let carr = [];
			setCarrito(carrito);
		}
		console.log("useCarritoHolder: libro: ",libro);
    setCarrito([...carrito, libro.libro]);
    console.log("useCarritoHolder: carrito: ",carrito);
  };

  const removeLibro = (libro) => {
  	setCarrito(carrito.filter(l => libro !== l));
  		

  };
	
	
	return {carrito,setCarrito,addLibro,removeLibro};
	
	};
