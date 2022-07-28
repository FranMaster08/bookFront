import { Card, Container, Grid, Typography, CardMedia, CardContent, CardActions, Button, Box } from "@mui/material";
import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/Libros.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom'; 


const LibrosAd = () => {

    const [ejemplares, setEjemplares] = useState();
    const [datos, setDatos] = useState ([])
    const params = useParams();

    const getEjemplares = async () => {
        try {
            const response = await fetch(`http://localhost:4000/Ejemplares`);
            const jsonData = await response.json();
            setEjemplares(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleDelete = async (id_ejemplar) => {
        const res = await fetch(`http://localhost:4000/Ejemplar/${id_ejemplar}`, {
            method: 'DELETE',
        })
        setEjemplares(ejemplares.filter(ejemplar => ejemplar.id_ejemplar !== id_ejemplar));
    }


    useEffect(() => {
        getEjemplares()
    }, [])

    useEffect(() => { console.log(ejemplares) }, [ejemplares])

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
    

    return (

        <>
            <Container>
                <Link to={`/${datos.correo}/nuevoejemplar`} className="nuevolibroad2">
                    <Button size="small" variant="contained" color="error" className="nuevolibroad">Nuevo Libro <AddIcon /></Button>
                </Link>

                <Typography marginBottom={1} marginTop={1} fontSize={30} fontFamily='Roboto' color={"#ffff"}> Libros disponibles</Typography>
                {ejemplares ? (
                    <>
                        <Grid container spacing={2}>
                            {ejemplares.map((ejemplar) => (
                                <Grid item xs={3}>
                                    <Card sx={{ maxWidth: 350 }}>
                                        <CardMedia style={{ display: 'flex', justifyContent: 'center', maxHeight: 350 }}>
                                            <img src={ejemplar.img ? require(`../imagenes/${ejemplar.img}`) : ""} className='fotografia1' alt="Libro no encontrado" />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h9" component="div">
                                                {ejemplar.titulo}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div">
                                                ${ejemplar.precioactual}
                                            </Typography>

                                        </CardContent>
                                        <div >
                                            <CardActions>
                                                <Button size="small" variant="contained" color="secondary" className="editad" sx={{ margin: 0.8 }} onClick={() => console.log('editando')}>
                                                    <Link to={`/${datos.correo}/nuevoejemplar/${ejemplar.id_ejemplar}/edit`} className='boton' >Editar</Link>  <EditIcon />
                                                </Button>

                                                <Button size="small" variant="contained" color="error" onClick={() => handleDelete(ejemplar.id_ejemplar)}>Borrar <DeleteIcon /></Button>

                                            </CardActions>
                                        </div>
                                    </Card>
                                </Grid>

                            ))}
                        </Grid>
                    </>
                ) : null}
            </Container>


        </>

    );

}

export default LibrosAd;
