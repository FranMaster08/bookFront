import { Card, CardContent, Grid, TextField, Typography, Box, IconButton, Button, Input } from "@mui/material"
import '../hojas-de-estilo/New_Ej.css';
import React, { useState, useEffect } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useParams } from 'react-router-dom';


function NuevoEjemplar() {
   
    const [datos, setDatos] = useState ([])
    const params2 = useParams();

    const cargarDatos = async (correo) => {
        const response = await fetch(`http://localhost:4000/Usuario2/${correo}`)
        const data = await response.json()
        setDatos(data);
        console.log(data)
    };

    useEffect(() => {
        if (params2.correo) {
            cargarDatos(params2.correo)
        }
    }, [params2.correo])

    const [ejemplar, setEjemplar] = useState({
        titulo: "",
        sinopsis: "",
        editorial: "",
        autor: "",
        anioedicion: "",
        tipoencuadernado: "",
        genero: "",
        stock: "",
        precioactual: "",
        isbn: "",
        img: "",
    });

    const [editing, setEditing] = useState(false);
    const params = useParams();

    const handleSubmit = async (e) => {

        if (editing) {
            await fetch(`http://localhost:4000/Ejemplar/${params.id_ejemplar}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(ejemplar),
                
            })
            console.log('esta bienn');
        } else {
            console.log(ejemplar);
            await fetch("http://localhost:4000/Ejemplar", {
                method: "POST",
                body: JSON.stringify(ejemplar),
                headers: { "Content-Type": "application/json" },
            });
        }
        { window.location.href = `http://localhost:3000/homeadmin/${datos.correo}`}
    };

    const handleChange = (e) =>
        setEjemplar({ ...ejemplar, [e.target.name]: e.target.value });
 
    const handleChangeImg = (e, filename) =>
        setEjemplar({ ...ejemplar, [e.target.name]: filename });

    const loadEjemplar = async (id_ejemplar) => {
        const res = await fetch(`http://localhost:4000/Ejemplar/${id_ejemplar}`)
        const data = await res.json()
        console.log(data)
        setEjemplar({ titulo: data.titulo, sinopsis: data.sinopsis, editorial: data.editorial, autor: data.autor, anioedicion: data.anioedicion, tipoencuadernado: data.tipoencuadernado, genero: data.genero, stock: data.stock, precioactual: data.precioactual,img: data.img, isbn: data.isbn, })
        setEditing(true)
    };

    useEffect(() => {
        if (params.id_ejemplar) {
            loadEjemplar(params.id_ejemplar);
        }
    }, [params.id_ejemplar])

    return (
        <div className="contenedor-nuevoej">
            <Grid container
                direction="column"
                alignItems='center'
                justifyContent="center"
            >
                <Grid item xs={3}>
                    <Card sx={{ mt: 5 }}>
                        <CardContent>

                            <form name="form-ejemplar" id="form-ejemplar" onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit()
                            }}>
                                <Typography >
                                    {editing ? 'Editar Ejemplar' : 'Nuevo Ejemplar'}
                                </Typography>
                                <Box

                                    sx={{
                                        '& > :not(style)': { m: 1, width: '78ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField margin="normal" fullWidth
                                        id="outlined-basic"
                                        label="Título"
                                        variant="outlined"
                                        value={ejemplar.titulo}
                                        sx={{
                                            display: 'block',
                                            margin: '.5 rem 0'
                                        }}
                                        name="titulo"
                                        onChange={handleChange}
                                    />
                                    <TextField margin="normal" fullWidth
                                        variant="outlined"
                                        value={ejemplar.sinopsis}
                                        label="Sinopsis"
                                        multiline
                                        rows={5}
                                        sx={{
                                            display: 'block',
                                            margin: '.5 rem 0'
                                        }}
                                        name="sinopsis"
                                        onChange={handleChange}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '220px' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField margin="normal"
                                        variant="outlined"
                                        value={ejemplar.editorial}
                                        label="Editorial"
                                        name="editorial"
                                        onChange={handleChange}
                                    />
                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="Autor"
                                        variant="outlined"
                                        value={ejemplar.autor}
                                        name="autor"
                                        onChange={handleChange}
                                    />

                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="Año de edición"
                                        variant="outlined"
                                        value={ejemplar.anioedicion}
                                        name="anioedicion"
                                        onChange={handleChange}
                                    />
                                </Box>


                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '220px' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="Tipo de encuadernación"
                                        variant="outlined"
                                        value={ejemplar.tipoencuadernado}
                                        name="tipoencuadernado"
                                        onChange={handleChange}
                                    />
                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="Genero"
                                        variant="outlined"
                                        value={ejemplar.genero}
                                        name="genero"
                                        onChange={handleChange}
                                    />

                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="Stock"
                                        variant="outlined"
                                        value={ejemplar.stock}
                                        sx={{

                                            margin: '.5 rem 1'
                                        }}
                                        name="stock"
                                        onChange={handleChange}
                                    />
                                </Box>


                                <Box

                                    sx={{
                                        '& > :not(style)': { m: 1, width: '220px' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="Precio"
                                        variant="outlined"
                                        value={ejemplar.precioactual}
                                        name="precioactual"
                                        onChange={handleChange}
                                    />

                                    <TextField margin="normal"
                                        id="outlined-basic"
                                        label="ISBN"
                                        variant="outlined"
                                        value={ejemplar.isbn}
                                        name="isbn"
                                        onChange={handleChange}
                                        helperText="ISBN de 13 números"
                                    />


                                    <label htmlFor="icon-button-file"  >
                                        <Input  accept="image/*" id="icon-button-file" type="file" 
                                            onChange={
                                                (e) => {
                                                    //handleChange
                                                    var filename = e.target.value.match(/[^\\/]*$/)[0];
                                                    console.log(filename)
                                                    handleChangeImg(e, filename);
                                                
                                                }
                                            } name="img"
                                        />
                                        {editing ?
                                            (<img height="50" width={50} src={require(`../imagenes/${ejemplar.img}`) ? require(`../imagenes/${ejemplar.img}`) : ""} />)
                                            : null}

                                        <IconButton color="secondary" aria-label="upload picture" component="span" >
                                            <PhotoCamera />
                                        </IconButton>
                                        
                                    </label>

                                    <Button variant="contained" color="secondary" type="submit" htmlFor="form-ejemplar"
                                        sx={{

                                            display: 'block',
                                            margin: '.5 rem 0'
                                        }}>Publicar
                                    </Button>
                                </Box>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

}

export default NuevoEjemplar;