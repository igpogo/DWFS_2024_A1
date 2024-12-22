import React, {useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {RelatosContext} from './context/RelatosContext';
import {useRetrieveCatalogo} from './hooks/useRetrieveCatalogo';
import {useCarritoHolder} from './hooks/useCarritoHolder';
import {Footer} from "./components/Footer";
import logo from './logo.svg';
import './App.css';
import libros_data from "./data/libros_data2.json";// with {type : 'json'};


function App() {

  const catalogo = libros_data.items;
  
  const cH = useCarritoHolder();

  console.log("APP: catalogo: ", catalogo);

  return (
    <RelatosContext.Provider value={{catalogo,cH}}>
      <GlobalRouter />
      <Footer />
    </RelatosContext.Provider>
    
  );
}

export default App;
