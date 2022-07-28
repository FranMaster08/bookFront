import React from 'react';
import '../../hojas-de-estilo/Misdatos.css';
import Footer from '../../componentes/Footer.jsx';
import Header from '../../componentes/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Button, CardContent, Grid} from '@mui/material'
import { Link } from 'react-router-dom';
import BarraBusqueda from '../../componentes/BarraBusqueda';

function Misdatos() {

    const [datos, setDatos] = useState ([])
    const params = useParams();
    const [editing, setEditing] = useState(false);

    const cargarDatos = async (correo) => {
        const response = await fetch(`http://localhost:4000/Usuario2/${correo}`)
        const data = await response.json()
        setDatos(data);
        setEditing(true)
    };

    useEffect(() => {
        if (params.correo) {
            cargarDatos(params.correo)
        }
    }, [params.correo])

    return (
        <>
            <Header/>  
                <Grid className='Misdatos-todo2'>
                    <h1 className='busquedamd'><BarraBusqueda/></h1>
                    <form className='mover'>
                        <Button variant='contained' color='error' type='submit' className='guardardatos' >
                        <Link to ={`/misdatos2/${datos.correo}/edit`} className='botoneditar'>Editar</Link>  
                        </Button>
                        <p className='Misdatos2'>Mis datos</p>
                        <p className='Datosdcuenta2'>Datos de cuenta</p>
                        <CardContent className='Datos-cuenta2'>
                            <p className='D-usuario'>Usuario
                                <p className="usuario-misdatos">{datos.nombreusuario}</p>
                            </p>
                            <p className='D-linea1'></p>
                            <p className='D-email'>E-mail
                                <p className="correo-misdatos">{datos.correo}</p>
                            </p>
                        </CardContent>
                        <p className='Personales2'>Datos personales</p>
                        <CardContent className='Datos-personales2'>
                            <p className='Dp-nym'>Nombre y apellido
                                <p className="nyp-misdatos">{datos.nombreyapellido}</p>
                            </p>
                            <p className='Dp-linea1'></p>
                            <p className='Dp-doc'>Documento 
                                <p className="dni-misdatos">{datos.documento}</p>
                            </p>
                            <p className='Dp-linea2'></p>
                            <p className='Dp-tel'>Teléfono
                                <p className="tel-misdatos">{datos.telefono}</p>
                            </p>
                        </CardContent>
                        <p className='Tarjeta2'>Tarjeta</p>
                        <CardContent className='Datos-tarjeta2'>
                            <div className='circulo-tarjeta2'>
                            <img className="imagen-mercadopago2"
                                src={require("../../imagenes/mercadopago.jpg")}
                                alt="Tarjeta de mercado"/>
                            </div>
                            <p className='Terminacion2'>Terminada en </p>
                            <p className='Dp-texto2'>Tarjeta Mercado Pago</p>
                            <p className='Vencimiento2'>Vencimiento:</p>
                        </CardContent>
                    </form>
                </Grid>
            <Footer />
        </>
    );
  }
  
  export default Misdatos;