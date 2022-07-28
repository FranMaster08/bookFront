import React from "react";
import FacebookLogin from "react-facebook-login";
import { useState } from 'react';
import '../hojas-de-estilo/Facebook2.css';

function Facebook2() {

    const [datos] = useState({
        correo: '',
        id_rol: 10,
        nombreyapellido: '',
        nombreusuario: "kh3"
    });

    const respuestaFacebook = (respuesta) => {
        datos.correo = respuesta.email
        datos.nombreyapellido = respuesta.name
        console.log(respuesta);
        console.log(respuesta.name)
        console.log("2")
        console.log(datos)
        fetch('http://localhost:4000/Usuario2', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json"},
        }); 
       (window.location.href = `http://localhost:3000/misdatos2/${datos.correo}/edit`)
    }
    
    const handleSubmit = async (e) => {
    await fetch('http://localhost:4000/Usuario2', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { "Content-Type": "application/json"},
    }); 
    };

    console.log(datos)

    return (
        <div className='loginWrapper2'>    
            <FacebookLogin
            appId="587494172332311"
            autoLoad={false}
            fields="name,email,picture"
            onClick={console.log ("bien")}
            callback={respuestaFacebook} 
            textButton="Iniciar sesion con Facebook"
            icon="fa-facebook"/>     
        </div>
    )
}

export default Facebook2;