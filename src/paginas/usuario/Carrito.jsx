import React from "react";
import BloqueCarrito from "../../componentes/BloqueCarrito";
import Footer from "../../componentes/Footer";
import "../../hojas-de-estilo/Carrito.css";
import Header from "../../componentes/Header";
import BarraBusqueda from '../../componentes/BarraBusqueda';

function Carrito() {
  return (
    <>
      <div className="shopcar-container">
        <Header/>
        <h1 className='busquedacar'><BarraBusqueda/></h1>
        <BloqueCarrito />
      </div>
      <Footer />
    </>
  );
}

export default Carrito;
