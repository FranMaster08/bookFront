import React, {useState, useEffect} from 'react';
import '../../hojas-de-estilo/MisCompras.css';
import Footer from '../../componentes/Footer.jsx';
import Header from '../../componentes/Header';
import { Button } from "@mui/material";

function MisCompras() { 

    const [compra, setCompra] = useState([])

    const cargarCompra = async () => {
        const response = await fetch ('http://localhost:4000/comprayventa')
        const data =  await response.json ()
        setCompra(data)
    }
    console.log(compra)

    useEffect(() => {
        cargarCompra()
    }, [])

    return (
        <>
            <Header />
            <div className='miscompras-todo'>
                dsad
                <div className="flex-car">
                    {compra.length > 0 ? (
                    compra.map((libros, i) => (
                        <div key={i} className="item-carrito">
                        <img src={libros.img}></img>
                        <div>
                            <p className="titulo-carr">{libros.titulo} </p>
                            <p>Imagen: {libros.img} </p>
                            <p>Precio: {libros.precio} </p>
                            <p>Metodo de pago : {libros.metodopago} </p>
                            <p>Fecha : {libros.fecha}</p>
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