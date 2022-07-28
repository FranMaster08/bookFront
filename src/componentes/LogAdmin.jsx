import React from "react";
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from "react";
import '../hojas-de-estilo/LogAdmin.css';

function LogAdmin() {

    const [admin, setAdmin] = useState ([])
    const [users, setUsers] = useState ([{
        codigo: "",
        correo: "",
        documento: "",
        id_rol: '',
        nombreusuario: "",
        nombreyapellido: "",
        telefono: ""
    }
    ])
    const cargarTareas = async () => {
        const response = await fetch('http://localhost:4000/Usuarios')
        const data = await response.json()
        setUsers(data);     
        console.log(data);
    };

    const handleChange = e => {
        setAdmin({...admin, [e.target.name]: e.target.value});
        
    };

    const validar = async (e) => {
        e.preventDefault();
        users.forEach(object =>{
            if(object.codigo == admin.codigo & object.id_rol == 11) {
                console.log("Se ecnontro");
                console.log(object.nombreyapellido) 
                console.log(object)
                (window.location.href = `http://localhost:3000/misdatosadmin/${object.correo}`)
            } else {
                console.log('No se encontro');
                (window.location.href = 'http://localhost:3000/')
            }
        });
    };

    useEffect(() => {
         cargarTareas()
    }, [])

    console.log(users)
    console.log(admin)
    console.log('ee')

    return (
        <> 
            <form onSubmit={validar}>
                <TextField
                    className="textlog"
                    sx={{ width: '25ch' }}
                    variant="outlined"
                    label='Codigo del administrador'
                    color="secondary"       
                    type="password"  
                    name='codigo'
                    value={admin.codigo}
                    onChange={handleChange}
                />
                <Button className="botonlog"
                variant='contained'
                color='primary'
                type='submit'>
                    Iniciar
                </Button>
            </form>
        </>
    )
}

export default LogAdmin;



