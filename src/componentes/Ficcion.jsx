import { Card, Container, Grid, Typography, CardMedia, CardContent, CardActions, Button, IconButton } from "@mui/material";
import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/Ficcion.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';

const SwipeToSlide = () => {

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

  const [ejemplares, setEjemplares] = useState();

  const getEjemplares = async () => {
    try {
      const response = await fetch(`http://localhost:4000/Ejemplares`);
      const jsonData = await response.json();
      setEjemplares(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getEjemplares()
  }, [])

  useEffect(() => {console.log(ejemplares)},[ejemplares])
  console.log(datos)
  return (

    <>
      <Container>
        <Typography marginBottom={1} marginTop={1} fontSize={30} fontFamily='Roboto' color={"#ffff"}> Libros disponibles</Typography>
        {ejemplares ? (
          <>
              <Grid container spacing={2}>
            {ejemplares.map((ejemplar) => (
                <Grid item xs={3}>
                  <Card sx={{ maxWidth: 350}}>
                    <CardMedia  style={{ display: 'flex', justifyContent: 'center', maxHeight:350 }}>
                      <img src={ejemplar.img ? require(`../imagenes/${ejemplar.img}`):""} className='fotografia1' alt="Libro no encontrado" />
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h9" component="div">
                        {ejemplar.titulo}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        ${ejemplar.precioactual}
                      </Typography>

                    </CardContent>
                    <CardActions>
                      <Link to={`/${datos.correo}/detallejemplar/${ejemplar.id_ejemplar}`} className="botonverhome">
                        <Button size="small" variant="contained" color="secondary">Ver</Button>
                      </Link>
                      
                    </CardActions>
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

export default SwipeToSlide;


{/* 
      <div contenedor-slider1 style={{ margin: 30 }}>
       


      </div>*/}