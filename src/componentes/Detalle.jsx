import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../hojas-de-estilo/Detalle.css";
import BarraBusqueda from './BarraBusqueda';
import { createPayment } from "../services/mercado.service";

const ListadeLibros2 = () => {
  let { id_ejemplar } = useParams();

  const Comprar = (cantidad, precioTotal) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let Email = params.get("carrito");
    createPayment(Email, cantidad, precioTotal)
      .then((res) => (window.location.href = res.init_point))
      .catch(console.error);
  };

  const [ejemplares1, setEjemplares] = useState([]);

  const [count, setCount] = useState(1)

  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    if (count <= 1) {
      console.log('es 1')
    } else {
      setCount(count - 1);
    }
    
  }

  const getEjemplar = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/Ejemplar/${id_ejemplar}`
      );
      const jsonData = await response.json();
      console.log("Carga de ejemplares", jsonData);
      setEjemplares(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEjemplar();
  }, []);

  const cargarEnCarrito = () => {
    // Leemos localStorage
    const datosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
    const libroExiste = datosEnCarrito.some(
      (item) => item.titulo === ejemplares1.titulo
    );

    if (libroExiste) {
      const upLoadedBook = datosEnCarrito.find(
        (item) => item.titulo === ejemplares1.titulo
      );
      const img = ejemplares1.img
        ? require(`../imagenes/${ejemplares1.img}`)
        : "";
      upLoadedBook.img = img;

      const cantidad = parseInt(upLoadedBook.cantidadEnCarrito) + 1;
      console.log(cantidad);
      const libro = {
        ...upLoadedBook,
        cantidadEnCarrito: cantidad,
      };

      const ListaDelibroActualizado = datosEnCarrito.map((item) => {
        if (item.titulo === ejemplares1.titulo) {
          return libro;
        }
      });
      localStorage.setItem("carrito", JSON.stringify(ListaDelibroActualizado));
    } else {
      const img = ejemplares1.img
        ? require(`../imagenes/${ejemplares1.img}`)
        : "";
      ejemplares1.img = img;
      ejemplares1.cantidadEnCarrito = 1;
      datosEnCarrito.push(ejemplares1);
      localStorage.setItem("carrito", JSON.stringify(datosEnCarrito));
    }
  };

  const {
    titulo,
    sinopsis,
    editorial,
    autor,
    anioedicion,
    tipoencuadernado,
    genero,
    stock,
    precioactual,
    isbn,
  } = ejemplares1;

  return (
    <>
      <Container maxWidth="400" className="contenedor-detalle">
      <h1 className='busquedet'><BarraBusqueda/></h1>
        <Card
          sx={{
            display: "flex",
            backgroundColor: "transparent",
            boxShadow: 0,
            borderRadius: 8,
          }}
        >
          <CardMedia sx={{ width: 231, margin: 3 }}>
            <img
              className="fotografia"
              src={
                ejemplares1.img ? require(`../imagenes/${ejemplares1.img}`) : ""
              }
              alt="Libro no encontrado"
            />
          </CardMedia>
          <Box sx={{ display: "flex", flexDirection: "column", margin: 1 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                color="white"
                fontFamily="Roboto"
                fontSize={40}
                lineHeight={2}
              >
                {titulo}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#E7E7E7"
                lineHeight={1}
                component="div"
                fontSize={20}
                fontFamily="Roboto"
              >
                {sinopsis}
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Editorial: {editorial}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Genero: {genero}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Autor: {autor}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Año de edicion: {anioedicion}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Tipo de encuadernación: {tipoencuadernado}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Stock: {stock}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • ISBN: {isbn}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#E7E7E7"
                  lineHeight={1.2}
                  component="div"
                  fontFamily={"Roboto"}
                  fontSize={20}
                >
                  • Precio: ${precioactual}
                </Typography>
              </Typography>
            </CardContent>
            <Card
              sx={{
                maxWidth: 600,
                backgroundColor: "transparent",
                boxShadow: 0,
                color: "white",
              }}
            >

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8381FF",
                  borderRadius: 25,
                  margin: 0.8,
                  fontFamily: "Roboto",
                  marginLeft: 9,
                }}
                onClick={() =>
                  Comprar(1, precioactual)}
              >
                Comprar
              </Button>

              
              <Button
                onClick={() => cargarEnCarrito()}
                variant="contained"
                sx={{
                  backgroundColor: "#8381FF",
                  borderRadius: 25,
                  margin: 0.8,
                  fontFamily: "Roboto",
                }}
              >
                Añadir al carrito <AddShoppingCartIcon />
              </Button>
              <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                size="medium"
                marginLeft={2}
              />
            </Card>
          </Box>
        </Card>
                <div className="pr">
                    
                  <div className="dd">
                    <ion-icon name="add" onClick={() => sumar()}></ion-icon>
                  </div>  

                  <div className="dd2">
                    <ion-icon name="remove-outline" onClick={() => restar()}></ion-icon>
                  </div> 
                
                  <h1 className="cont">{count}</h1>
                    
                </div>
      </Container>
    </>
  );
};

export default ListadeLibros2;
/* 
<h1 className="cantdet">
                    u: {count}
              </h1>
              <Button onClick={() => sumar()}
                  variant="contained"
                  sx={{
                  backgroundColor: "#8381FF",
                  }}
                  >
                    +
              </Button>
              <Button onClick={() => restar()}
                  variant="contained"
                  sx={{
                  backgroundColor: "#8381FF",
                  margin: 0.8,
                }}
                  >
                    --
              </Button>
*/