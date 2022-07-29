import React from "react";
import '../hojas-de-estilo/Header.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Button } from '@mui/material';

function Header(){
    const [dropdown, setDropdown]= useState(false);

    const [datos, setDatos] = useState ([])
    const params = useParams();

    const cargarDatos = async (correo) => {
        const response = await fetch(`http://localhost:4000/Usuario2/${correo}`)
        const data = await response.json()
        setDatos(data);
        console.log(data)
    };

    useEffect(() => {
        if (params.correo) {
            cargarDatos(params.correo)
        }
    }, [params.correo])

    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }

    const botonHome = async (e) => {
        e.preventDefault();
        if (datos.id_rol == 11){
            console.log('bien')
            (window.location.href = `http://localhost:3000/homeadmin/${datos.correo}`)
        }   else {
            console.log('va para home nomas')
            (window.location.href = `http://localhost:3000/home/${datos.correo}`)
        }
    };

    const direccionCarrito = async (e) => {
        e.preventDefault();
        if (datos.id_rol == 10) {
            console.log('es usuario')
            (window.location.href = `http://localhost:3000/carrito?user=${datos.correo}`)
        } else {
            console.log('es admin y el boton no funciona')
        }
    };

    return (
        <>
            <nav className="Header-total3">
                <a className="flecha3"  target="_blank"><ion-icon name="arrow-back-outline"></ion-icon></a>
                <form onSubmit={botonHome}>
                    <Button type='submit' className="cassita">
                        <ion-icon name="home"></ion-icon>
                    </Button>
                </form>
                <div className="contenedor-busqueda">
                    <a className="icono-busqueda" target="_blank"><ion-icon name="search"></ion-icon></a>
                </div>
                <form onSubmit={direccionCarrito}>
                    <Button type='submit' className="icono-carrito">
                        <ion-icon name="cart"></ion-icon>
                    </Button>
                </form>
                <a className="icono-persona" target="_blank"></a>
                <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                    <DropdownToggle className="icono2">
                    <ion-icon name="person-circle"></ion-icon>
                    </DropdownToggle>
                    
                    
                    <DropdownMenu>
                        <DropdownItem>
                            <Link to ={`/misdatos/${datos.correo}`} className='misdatosfo' >Mis datos</Link>
                        </DropdownItem>
                        <DropdownItem divider className="linea-1-drop"/>
                        <DropdownItem>
                            <Link to ={`/miscompras/${datos.correo}`} className='resfo' >Mis Compras</Link>
                        </DropdownItem>
                        <DropdownItem divider className="linea-2-drop"/>
                        <DropdownItem>
                            <Link to ={'/'} className='cerrarsesionfo'>Cerrar sesion</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>         
            </nav>
    </>
    );
}

export default Header;