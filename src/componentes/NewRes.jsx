import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import '../hojas-de-estilo/NewRes.css';
import {useParams} from 'react-router-dom';

const NuevaResenia = () => {

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

    let { id_ejemplar } = useParams();

    const [ejemplares1, setEjemplares] = useState([]);

    const getEjemplar = async () => {
        try {
            const response = await fetch(`http://localhost:4000/Ejemplar/${id_ejemplar}`);
            const jsonData = await response.json();
            setEjemplares(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getEjemplar();
    }, []);
    //const {titulo, sinopsis, editorial, autor, anioedicion, tipoencuadernado, genero, stock,  precioactual, isbn} = ejemplares1; 

    //console.log(datos.nombreusuario)
    var valor2 = datos.nombreusuario;
    console.log(valor2)

    var valor = ejemplares1.isbn;
    console.log(valor)

    const [resen, setResen] = useState({
        resenias: "",
        isbn: '',
        nombreusuario: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:4000/Resenia2", {
            method: "POST",
            body: JSON.stringify(resen),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        {window.location.href = `http://localhost:3000/${datos.correo}/detallejemplar/${id_ejemplar}`}
    };


    const handleChange = (e) =>
        setResen({ ...resen, [e.target.name]: e.target.value });
        resen.isbn = valor
        resen.nombreusuario = valor2
        

    return (
        <>
            <div className='contenedor-newresenia'>
                <Container maxWidth="400" >
                    <Grid
                        direction="column"
                        alignItems="center"
                        justifyContent="center"

                    >
                        <Grid>
                            <Card sx={{ mt: 1, backgroundColor: 'transparent', boxShadow: 0 }}>
                                <Typography marginBottom={-1} fontSize={20} fontFamily='Roboto' color={"#000"} marginLeft={2} >  ¡Danos tu opinion!</Typography>
                                <CardContent>
                                    <form onSubmit={handleSubmit} >
                                        <TextField fullWidth id="fullWidth"
                                            variant='filled'
                                            label='Aqui escribe tu opinion'
                                            multiline
                                            rows={1}
                                            color="secondary"
                                            sx={{
                                                display: 'block',
                                                margin: '.5rem 0'
                                            }}
                                            name="resenias"
                                            onChange={handleChange}

                                        />                                                                    
                                        <Button Button variant="contained" type='submit' disableElevation color="secondary"  >Opinar</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default NuevaResenia;