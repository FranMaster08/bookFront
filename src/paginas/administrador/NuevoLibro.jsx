import React from 'react';
import Newej from '../../componentes/Newej';
import Header from '../../componentes/Header';
import Footer2 from '../../componentes/Footer2';
import '../../hojas-de-estilo/NuevoLibro.css';

function NuevoLibro2() {
  return (
    <> 
      <Header />
      <div className="Nuevo-Libro">
          <Newej/>
      </div>
      <Footer2 />
    </>

  );
}

export default NuevoLibro2;