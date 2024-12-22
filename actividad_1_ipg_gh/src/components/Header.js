import React from 'react';
import '../styles/HeadesStyle.css';
import {Link} from "react-router-dom";

export const Header = () => {
	return(
		
		<header className = "header">
		
		<Link to='/libros'>
                <button>Caseron</button>
            </Link>
    <br />

		<p className = "header-meassage"> Relatos de Papel </p>
		

    <Link to='/libros/compra/carrito'>
                <button>Carruaje</button>
            </Link>
		
		<Link to='/libros/compra/carrito/pago'>
                <button>Adquiera vos su carruaje</button>
            </Link>
		</header>

		);
};
//<img href="../public/Microsoft-Fluentui-Emoji-3d-Green-Book-3d.ico" className ="header-image" alt ="Relatos Logo">