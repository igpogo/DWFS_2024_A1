import {useEffect,useState} from "react";
import libros_data from "../data/libros_data2.json";// with {type : 'json'};

export const useRetrieveCatalogo = () => {

	const [catalogo, setCatalogo] = useState({});
	/*
	*  useEffect will provide de asemblie for libros
	*  we get the libros from the back-end
	*
	*/
	console.log("useRetrieveCatalago: libros_data: ", libros_data.items);

	const retCatalogo = libros_data.items;	

	const url = "https://www.googleapis.com/books/v1/volumes?q=surfing";
	useEffect(()=>{
		// fetch(url).then((catalogo) => catalogo.json()).then((catalogo.items) => setCatalogo(catalogo)); 
		setTimeout(()=>{
			
			console.log("set catalogo: ", retCatalogo);
			setCatalogo (retCatalogo);
		},1222);
	},[]);
	return catalogo;
};