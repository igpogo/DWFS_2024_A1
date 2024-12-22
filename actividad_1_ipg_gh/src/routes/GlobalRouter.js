// TODO implement first the views to do this

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import {RelatosContext} from "../context/RelatosContext";
import NotFound from '../views/NotFound';
import {Libros} from '../views/Libros';
import {CarritoDetails} from "../views/CarritoDetails";
import {Header} from "../components/Header";
import {LibroDetails} from "../components/LibroDetails";
import {PagoFinal} from "../views/PagoFinal";

const GlobalRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Landing /></Layout>} />
                <Route path="/libros" element={<Layout><Libros /></Layout>} />
                <Route path="/libro/:libroId" element={<Layout><LibroDetails /></Layout>} />
                <Route path="/libros/compra/carrito" element={<Layout><CarritoDetails /></Layout>} />
                <Route path="/libros/compra/:libroId" element={<Layout><LibroDetails /></Layout>} />
                <Route path="/libros/compra/carrito/pago" element={<Layout><PagoFinal /></Layout>} />
                <Route path="/libros/compra/pago/:libroId" element={<Layout><PagoFinal /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
};

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
