import React from "react";
import Detalle from "../../componentes/Detalle";
import Resenia from "../../componentes/Resenia";
import NewRes from "../../componentes/NewRes";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import "../../hojas-de-estilo/DetalleEjemplar.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalleEjemplar() {
  const [datos, setDatos] = useState([]);
  const params = useParams();

  const cargarDatos = async (correo) => {
    const response = await fetch(`http://localhost:4000/Usuario2/${correo}`);
    const data = await response.json();
    setDatos(data);
  };

  useEffect(() => {
    // if (params.correo) {
    //     cargarDatos(params.correo)
    // }
  }, [params.correo]);

  return (
    <>
      <Header />
      <div className="Detalle_Ejemplar">
        <Detalle />
        <NewRes />
        <Resenia />
      </div>
      <Footer />
    </>
  );
}

export default DetalleEjemplar;
