import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import '../hojas-de-estilo/Header3.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { Button } from '@mui/material';

function Header3(){
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
    console.log(datos)

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

    return (
        <>
        <form  onSubmit={botonHome}>
            <nav className="Header-total3">
                <a className="flecha3"target="_blank"><ion-icon name="arrow-back-outline"></ion-icon></a>
                <Button type='submit' className="icono-casita3">
                    <ion-icon name="home"></ion-icon>
                </Button>
                <Link to ={`/carrito?carrito=${datos.correo}`} className="icono-carrito3">
                    <ion-icon name="cart"></ion-icon>
                </Link>
                <a className="icono-persona3" target="_blank"></a>
                <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
                    <DropdownToggle className="icono">
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
                            <Link to ={`/`} className='cerrarsesionfo'>Cerrar sesion</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>         
            </nav>
        </form>
        </>
    );
}

export default Header3;