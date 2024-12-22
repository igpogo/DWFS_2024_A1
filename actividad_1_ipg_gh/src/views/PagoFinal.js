import React from 'react';
import {useContext, useState} from 'react';
import {RelatosContext} from '../context/RelatosContext';
import {useParams} from "react-router-dom";


export const PagoFinal = () => {

	
	const {catalogo,cH} = useContext(RelatosContext);
	const carrito = cH.carrito;
	const addLibro = cH.addLibro;
	const removeLibro = cH.removeLibro;
	
	const params = useParams();
	
	let cuenta = 0;
	console.log("PagoFinal: params: ", params);
	if (params.libroId !== undefined){
		
		const { libroId } = params;
		const libro = catalogo.find(l => l.id === params.libroId);
		if (libro !== undefined){
			cuenta = libro.saleInfo.listPrice.amount;
		}
	}else{
		console.log("PagoFinal: carrito:", carrito);
		carrito.map((libro,i) => {
			
			console.log("PagoFinal: libro:", libro);
			const {saleInfo} = libro || {};
			const {listPrice} = saleInfo || {};
			let {amount} = listPrice || 0;
			amount = (amount === undefined) ? 0 : amount;
			console.log("PagoFinal: amount: ",amount);
			cuenta = cuenta + amount;
			console.log("PagoFinal: cuenta: ",cuenta);
		});
	}
	
	console.log("libroDetails: Array.isArray(catalogo):",Array.isArray(catalogo));
	console.log("libroDetails: libroId:",params.libroId);
	

  const pago = (event) => {
    event.preventDefault();
    // Procesamiento del pago electronico
    console.log("Comprando");
  };

  if (cuenta === 0){
  	return(
  		<>
  			<h1 className = "PagoFinal-titulo">Nada a pagar</h1>
  			</>
  		);
  }else{
			return (
				<>
				<h2 className = "PagoFinal-titulo">Total a pagar {cuenta}</h2>

				
					<div>
						<form action={pago}>
		      
		        <div className="row">
		          <div className="col-50">
								<h3>Billing Address</h3>
			            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
			            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
			            <label for="email"><i className="fa fa-envelope"></i> Email</label>
			            <input type="text" id="email" name="email" placeholder="john@example.com" />
			            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
			            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
			            <label for="city"><i className="fa fa-institution"></i> City</label>
			            <input type="text" id="city" name="city" placeholder="New York" />

			            <div className="row">
			              <div className="col-50">
			                <label for="state">State</label>
			                <input type="text" id="state" name="state" placeholder="NY" />
			              </div>

			              <div className="col-50">
			                <label for="zip">Zip</label>
			                <input type="text" id="zip" name="zip" placeholder="10001" />
			              </div>
			            </div>
		          </div>

		          <div className="col-50">
		            <h3>Payment</h3>
		            <label for="fname">Accepted Cards</label>
		            <div className="icon-container">
		              <i className="fa fa-cc-visa" ></i>
		              <i className="fa fa-cc-amex" ></i>
		              <i className="fa fa-cc-mastercard"></i>
		              <i className="fa fa-cc-discover" ></i>
		            </div>
		            <label for="cname">Name on Card</label>
		            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
		            <label for="ccnum">Credit card number</label>
		            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
		            <label for="expmonth">Exp Month</label>
		            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
		            <div className="row">
		              <div className="col-50">
		                <label for="expyear">Exp Year</label>
		                <input type="text" id="expyear" name="expyear" placeholder="2018" />
		              </div>
		              <div className="col-50">
		                <label for="cvv">CVV</label>
		                <input type="text" id="cvv" name="cvv" placeholder="352" />
		              </div>
		            </div>
		          </div>
		          
		        </div>
		        <label>
		          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
		        </label>
		        <input type="submit" value="Continue to checkout" className="btn" />
		      </form>
		    </div>
    	</>
  	);

}
}

  
