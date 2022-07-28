import React, {useState, useEffect} from 'react';
import HeaderAdm from '../../componentes/HeaderAdm';
import Footer from '../../componentes/Footer';
import { Typography, Grid, Box } from '@mui/material';
import '../../hojas-de-estilo/AdmResenias.css';
import {Button} from "@mui/material";

function AdmResenias() {

    const [res, setRes] = useState([])

    const cargarResenias = async () => {
        const response = await fetch ('http://localhost:4000/Resenias')
        const data =  await response.json ()
        setRes(data)
    }
    console.log(res)

    const eliminarResenia = async (id_resenia) => {
        await fetch (`http://localhost:4000/Resenia/${id_resenia}`, {
            method: "DELETE",
        })
        (window.location.href = 'http://localhost:3000/res')
    }

    useEffect(() => {
        cargarResenias()
    }, [])

    return (
        <>
            <div>
                <HeaderAdm/>
                <div style={{marginLeft:"10px", marginTop: "15px", marginBottom: "15px"}}>
                    {
                        res.map((resenia) => (
                            <Grid container>

                                <Grid item xs={5}  style={{backgroundColor:"rgb(255, 255, 255)", marginBottom:"5px"}}>
                                    <Box border={1} className="admres">
                                        <Typography style={{fontWeight: "bold"}}>{resenia.resenias}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} style={{backgroundColor:"rgb(255, 255, 255)", marginBottom:"5px"}}>
                                    <Box border={1} className="admus" >
                                        <Typography style={{fontWeight: "bold"}}>Usuario: {resenia.nombreusuario}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} style={{backgroundColor:"rgb(255, 255, 255)", marginBottom:"5px"}}>
                                    <Box border={1} className="admisb">
                                        <Typography style={{fontWeight: "bold"}}>ISBN: {resenia.isbn}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} style={{backgroundColor:"rgb(255, 255, 255)", marginBottom:"5px"}}>
                                    <Box border={1} className="admid">
                                        <Typography style={{fontWeight: "bold"}}>ID resenia: {resenia.id_resenia}</Typography>
                                        
                                    </Box>
                                </Grid>

                                <Button variant='contained' 
                                    onClick={() => eliminarResenia(resenia.id_resenia)}
                                    sx={{
                                    backgroundColor: "red",
                                    color: "white",
                                    height: "24px",
                                    marginTop: "1px",
                                    borderRadius: "0px",
                                    fontWeight: "bold"}}
                                >
                                    Eliminar
                                </Button>

                            </Grid>
                        ))
                    }
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default AdmResenias;