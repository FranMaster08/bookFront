import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/BloqueCarrito.css";
import { createPayment } from "../services/mercado.service";
import { Button } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function BloqueCarrito() {
  const [librosCarrito, setlibrosCarrito] = useState([]);

  const cargarCarrito = async () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let user = params.get("user");
    const response = await fetch(`http://localhost:4000/carrito/${user}`);
    const result = await response.json();
    setlibrosCarrito([...result.data]);
  };

  const BorrarDeCarrito = async (id_ejemplar) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let user = params.get("user");
    await fetch(`http://localhost:4000/carrito/${id_ejemplar}`, {
      method: "DELETE",
      data: JSON.stringify(id_ejemplar),
      headers: { "Content-Type": "application/json" , "user":user} 
     
    })
    cargarCarrito()
  };

  useEffect(() => {
    cargarCarrito();
  }, []);

  const Comprar = (cantidad, precioTotal) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let Email = params.get("carrito");
    createPayment(Email, cantidad, precioTotal)
      .then((res) => (window.location.href = res.init_point))
      .catch(console.error);
  };
  
  return (
    <div className="item-carrito-container">
      <div className="flex-car">
        {librosCarrito.length > 0 ? (
          librosCarrito.map((libros, i) => (
            <div key={i} className="item-carrito">
              <img src={require(`../imagenes/${libros.img}`)}></img>
              <div>
                <p className="titulo-carr">{libros.titulo} </p>
                <p>Autor : {libros.autor} </p>
                <p>Precio : $ {libros.precio}</p>
                <p>Cantidad : {libros.cantidad}</p>
                <Button
                  onClick={() => BorrarDeCarrito(libros.id_ejemplar)}
                  variant="contained"
                  sx={{
                    backgroundColor: "#8381FF",
                    borderRadius: 25,
                    margin: 0.8,
                    fontFamily: "Roboto",
                  }}
                >
                  <RemoveShoppingCartIcon />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="center-fail">
            <h2>No agregaste al carrito </h2>
          </div>
        )}
      </div>

      <div className="car-total">
        <p>
          Total:{" $ "}
          {librosCarrito.length
            ? librosCarrito.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.precio * currentValue.cantidad,
                0
              )
            : "0"}
        </p>
        <p>
          Cantidad de Libros:{" "}
          {librosCarrito.length
            ? librosCarrito.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.cantidad,
                0
              )
            : "0"}
        </p>
        <button
          className="btn btn-primary btn-block"
          onClick={() =>
            Comprar(
              librosCarrito.length
                ? librosCarrito.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      currentValue.precio * currentValue.cantidad,
                    0
                  )
                : 0,

              1
            )
          }
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
}

export default BloqueCarrito;
