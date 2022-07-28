import React from "react";
import '../hojas-de-estilo/Bloque.css';
import Facebook2 from "./Facebook2.jsx";
import LogAdmin from "./LogAdmin";

function Bloque() {
  return (
    <div className="contenedor-bloque">
      <img className="logo-bk"
          src={require("../imagenes/LOGOB.png")}
          alt="logo"/>
          <h1>BookStore</h1>
          <p className="parrafo1">Somos una compañia familiar que vende libros </p>
          <p className="parrafo1">¡Compra online en BookStore!</p>
          <img className="imagen-bk"
          src={require("../imagenes/libro.png")}
          alt="Niña leyendo un libro"/>
          <div className="contenedor-login">
            <h1>Primero debes registrarte con Facebook</h1>
              <Facebook2 className='loginWrapper'/>
              <LogAdmin/>
          </div>
    </div>
  );
}

export default Bloque;
