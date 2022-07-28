import React from 'react';
import './Inicio.css';
import Bloque from '../componentes/Bloque';
import Footer2 from '../componentes/Footer2';

function Inicio() {
  return (
    <>
      <div className="contenedor-Inicio">
        <Bloque />  
      </div>
      <Footer2 />
    </>
  );
}

export default Inicio;