import React from 'react';
import '../../hojas-de-estilo/Misdatos2.css';
import Header from '../../componentes/Header.jsx';
import Footer from '../../componentes/Footer.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Button, CardContent, Grid} from '@mui/material';
import BarraBusqueda from '../../componentes/BarraBusqueda';

function Misdatos2 () {
    const [datos, setDatos] = useState ([])

    const params = useParams();
    const [editing, setEditing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editing) {
            await fetch(`http://localhost:4000/Usuario2/${params.correo}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(datos), 
            })
            if (datos.id_rol == 11) {
                {window.location.href = `http://localhost:3000/homeadmin/${params.correo}`}
            } else {
            {window.location.href = `http://localhost:3000/home/${params.correo}`}
        }
        } 
    };

    const handleChange = e => {
        setDatos({...datos, [e.target.name]: e.target.value});
    };

    const cargarDatos = async (correo) => {
        const response = await fetch(`http://localhost:4000/Usuario2/${correo}`)
        const data = await response.json()
        setDatos(data);
        setEditing(true)
    };
    console.log(datos)

    useEffect(() => {
        if (params.correo) {
            cargarDatos(params.correo)
        }
    }, [params.correo])

    return (
        <>
            <Header/>
            {
                
                <Grid className='Misdatos-todo2'>
                    <h1 className='busquedamd2'><BarraBusqueda/></h1>
                    <form className='mover' onSubmit={handleSubmit}>
                        <Button variant='contained' color='secondary' type='submit' className='guardardatos' 
                        disabled={!datos.telefono || !datos.nombreusuario || !datos.documento}>
                            Guardar
                        </Button>
                        <p className='Misdatos2'>Mis datos</p>
                        <p className='Datosdcuenta2'>Datos de cuenta</p>
                        <CardContent className='Datos-cuenta2'>
                            <p className='D-usuario2'>Usuario
                                <input type ="text" className="usuario-misdatos2" 
                                name='nombreusuario'
                                value={datos.nombreusuario}
                                onChange={handleChange}/>
                            </p>
                            <p className='D-linea1-2'></p>
                            <p className='D-email2'>E-mail
                                <p className="correo-misdatos2">{datos.correo}</p>
                            </p>
                        </CardContent>
                        <p className='Personales2'>Datos personales</p>
                        <CardContent className='Datos-personales2'>
                            <p className='Dp-nym2'>Nombre y apellido
                                <p className="nyp-misdatos2">{datos.nombreyapellido}</p>
                            </p>
                            <p className='Dp-linea1-2'></p>
                            <p className='Dp-doc2'>Documento 
                                <input type ="text" className="dni-misdatos2" 
                                placeholder='Ingrese su numero de DNI...' 
                                name='documento'
                                value={datos.documento}
                                onChange={handleChange}/>
                            </p>
                            <p className='Dp-linea2-2'></p>
                            <p className='Dp-tel2'>Teléfono
                                <input type ="text" className="tel-misdatos2"
                                placeholder='Ingrese su numero de telefono...' 
                                name='telefono'
                                value={datos.telefono}
                                onChange={handleChange}></input>
                                
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
            }
            <Footer />
        </>
    )
}

export default Misdatos2;