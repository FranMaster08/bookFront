import { Card, CardContent, Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, {useState, useEffect} from 'react';
import '../hojas-de-estilo/Resenia.css';
import {useParams} from 'react-router-dom';

const ListaResenia = () => {
    const [rese,setResenia] = useState([])

    let { id_ejemplar } = useParams();

    const loadresenias = async () => {
        const response = await fetch (`http://localhost:4000/prueba2/${id_ejemplar}`)
        const data =  await response.json ()
        setResenia(data)
    }

    useEffect(() => {
        loadresenias()

    }, [])

  //, id_resenia, calificacion, nombreusuario, isbn


  return(
    <>
    <div className='contenedor-resenia'>
        <Container maxWidth="400" >
          
            <Typography  marginBottom={1} marginTop={1} fontSize={20} fontFamily='Roboto' color={"#ffff" }>Reseñas:</Typography>
            {
                rese.map ((resenias, nombreusuario) =>(
                    <Card style = {{
                        marginBottom: ".7rem",
                        backgroundColor:"rgb(255, 255, 255)"
                    }}>
                        <CardContent>
                            <Typography fontSize={18}>
                                <AccountCircleIcon/> {resenias.nombreusuario}
                            </Typography>
                            <Typography>{resenias.resenias}</Typography>
                        </CardContent>
                    </Card>      
                ))
            }
        </Container> 
    </div>
    </>
  );
}

export default ListaResenia;