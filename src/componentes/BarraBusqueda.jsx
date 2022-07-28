import React from 'react';
import '../hojas-de-estilo/BarraBusqueda.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

function BarraBusqueda() {

    const [datos, setDatos] = useState ([])
    const params = useParams();

    const cargarDatos = async (correo) => {
        const response = await fetch(`http://localhost:4000/Usuario2/${correo}`)
        const data = await response.json()
        setDatos(data);
    };
    useEffect(() => {
        if (params.correo) {
            cargarDatos(params.correo)
        }
    }, [params.correo])

    const [genero, setGenero] = useState ([
    ])
    const [buscar, setBuscar] = useState ([{
        elemento: ""
    }
    ])

    //cargar las tareas
    const cargarTareas = async () => {
        const response = await fetch('http://localhost:4000/Ejemplares')
        const data = await response.json()
        setGenero(data);  
    };

    console.log(genero)
    //mostrar las tareas
    useEffect(() => {
        cargarTareas()
   }, [])

   const handleChange = e => {
        setBuscar({...buscar, [e.target.name]: e.target.value});
    };
    console.log(buscar)

    if (datos.id_rol === 11) {
        console.log('es admin')
    } else {
        console.log('es usuario')
    }

    const busqueda = async (e) => {
        e.preventDefault();
        if (datos.id_rol === 10) {
            genero.forEach(object =>{
                if(object.genero === buscar.elemento) {
                    console.log("Se ecnontro un genero");
                    console.log(datos.correo)
                    console.log(object)
                    (window.location.href = `http://localhost:3000/homeG/${datos.correo}/${buscar.elemento}`)
                } else {
                    if(object.titulo === buscar.elemento) {
                        console.log('Se encontro un titulo')
                        (window.location.href = `http://localhost:3000/homeT/${datos.correo}/${buscar.elemento}`)
                    } else {
                        console.log('No se encontro nada');
                        (window.location.href = `http://localhost:3000/home/${datos.correo}`)
                    }
                }
            });
        } else {
            console.log('es admin y no hace nada')
        }
        
    };

    return (
        <>
            <form onSubmit={busqueda}>
                <input type ="text" className="tex-buscaraa" 
                                placeholder='Buscar...' 
                                name='elemento'
                                value={buscar.elemento}
                                onChange={handleChange}/>
                                
            </form>
        </>
    )
}

export default BarraBusqueda;