import React from 'react';
import Ficcion2 from '../../componentes/Ficcion2';
import Header3 from '../../componentes/Header3';
import Footer from '../../componentes/Footer';
import '../../hojas-de-estilo/Home.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import BarraBusqueda from '../../componentes/BarraBusqueda';

function Home4() {

  const [datos, setDatos] = useState ([])
    const params = useParams();

    const cargarDatos = async (correo) => {
        const response = await fetch(`http://localhost:4000/Usuario2/${correo}`)
        const data = await response.json()
        setDatos(data);
        console.log(data)
    };

    console.log(datos)
    console.log('andas')

    useEffect(() => {
        if (params.correo) {
            cargarDatos(params.correo)
        }
    }, [params.correo])
    console.log(datos)


  return (
    <><Header3 />
      <div className="Home-total3">   
        <h1>BookStore <MenuBookIcon fontSize="large" /></h1>
        <div className="contenedor-busqueda-home3">
          <a className="icono-busqueda" target="_blank"><ion-icon name="search"></ion-icon></a>
          <a className='bussqueda'><BarraBusqueda/></a>
        </div>
        <Ficcion2 /> 
      </div>
      <Footer />
    </>
  );
}

export default Home4;