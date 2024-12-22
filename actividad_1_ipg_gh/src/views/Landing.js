import React from 'react';
import {Link} from 'react-router-dom';
import useRedirection from "../hooks/useRedirection";
const Landing = () => {
	
	useRedirection("/libros", 500);

	return(
		<div className ="Landing">
			<Link to={"/libros"}>
				<h1>Mientras esperas la carga de mentira de la página, puedes leer el principio de '"El ingenioso hidalgo Don Quijote"' </h1>
				<br />
				<h4> EN UN LUGAR de la Mancha, de cuyo nombre no quiero acordarme,
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
antigua, rocín flaco y galgo corredor. Una olla de algo mas vaca que carnero,
salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes,
algún palomino de añadidura los domingos, consumían las tres partes de su
hacienda. El resto della concluían sayo de velarte, y los días de entresemana se
honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de
los cuarenta, y una sobrina que no llegaba a los veinte. Frisaba la edad de nuestro
hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto
de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el
sobrenombre de Quijada, o Quesada, aunque por conjeturas verosímiles se deja
entender que se llamaba Quejana.
			</h4>
			</Link>
		</div>

		);
};

export default Landing;