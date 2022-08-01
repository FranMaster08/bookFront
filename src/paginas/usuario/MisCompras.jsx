import React, {useState, useEffect} from 'react';
import '../../hojas-de-estilo/MisCompras.css';
import Footer from '../../componentes/Footer.jsx';
import Header from '../../componentes/Header';
import { Button } from "@mui/material";

function MisCompras() { 

    const [compra, setCompra] = useState([])

    const cargarCompra = async () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let user = params.get("user");
        console.log("data leida :", user);
        const response = await fetch (`http://localhost:4000/miscompras/${user}`)
        const data =  await response.json ()
        setCompra([...data.compras])
    }
  

    useEffect(() => {
        cargarCompra()
    }, [])

    return (
        <>
            <Header />
            <div className='miscompras-todo'>
                <div className="flex-car">
                    {compra.length > 0 ? (
                    compra.map((libros, i) => (
                        <div key={i} className="item-carrito">
                        <img src={  libros.img ? require(`../../imagenes/${libros.img}`) : ""}></img>
                        <div>
                            <p className="titulo-carr">{libros.titulo} </p>
                            <p>Precio: {libros.precio} </p>
                            <p>Fecha : {libros.fechacompra}</p>
                            <p>Nombre de Usuario : {libros.nombreusuario}</p>
                        </div>
                        </div>
                    ))
                    ) : (
                    <div className="center-fail">
                        <h2>No Hay Compras Realizadas </h2>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MisCompras;