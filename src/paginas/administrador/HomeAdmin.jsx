import React from 'react';
import Libros from '../../componentes/Libros';
import HeaderAdm2 from '../../componentes/HeaderAdm2';
import Footer from '../../componentes/Footer';
import '../../hojas-de-estilo/HomeAdmin.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState } from 'react';

function Home2() {
  const [headbuscar, setHeadbuscar] = useState("Buscar...");
  return (
    <> <HeaderAdm2/>
      <div className="Home-total2">
        <h1>BookStore <MenuBookIcon fontSize="large" /></h1>
        <div className="contenedor-busqueda-home2">
          <a className="icono-busqueda" href="http://localhost:3000/" target="_blank"><ion-icon name="search"></ion-icon></a>
          <input type="text" className="tex-buscar" value={headbuscar} />
        </div>
        <Libros />
      </div>
      <Footer />
    </>

  );
}

export default Home2;