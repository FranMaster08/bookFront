//import Footer from  './componentes/Footer';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio.js";
import Libros from "./componentes/Libros";
import Home from "./paginas/usuario/Home";
import DetalleEjemplar from "./paginas/usuario/DetalleEjemplar";
import Carrito from "./paginas/usuario/Carrito";
import prueba from "./componentes/prueba";
import AdmResenias from "./paginas/administrador/AdmResenias.jsx";
//import Newej from './componentes/Newej';
import HomeAdmin from "./paginas/administrador/HomeAdmin";
import NuevoLibro from "./paginas/administrador/NuevoLibro";
import Misdatos from "./paginas/usuario/Misdatos";
import Misdatos2 from "./paginas/usuario/Misdatos2";
import Misdatos2Admin from "./paginas/administrador/Misdatos2Admin.jsx";
import MisdatosAdmin from "./paginas/administrador/MisdatosAdmin";
import BarraBusqueda from "./componentes/BarraBusqueda";
import LogAdmin from "./componentes/LogAdmin";
import Home2 from "./paginas/usuario/Home2";
import Home3 from "./paginas/usuario/Home3";
import Header from "./componentes/Header"
import MisCompras from "./paginas/usuario/MisCompras";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/misdatos/:correo" component={Misdatos} />
      <Route exact path="/misdatos2/:correo/edit" component={Misdatos2} />
      <Route exact path="/misdatosadmin/:correo" component={MisdatosAdmin} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/libro" component={Libros} />
      <Route
        exact
        path="/detallejemplar/:id_ejemplar"
        component={DetalleEjemplar}
      />
      <Route exact path="/home/:correo" component={Home} />
      <Route exact path="/homeG/:correo/:elemento" component={Home2} />
      <Route exact path="/homeT/:correo/:elemento" component={Home3} />
      <Route
        exact
        path="/:correo/detallejemplar/:id_ejemplar"
        component={DetalleEjemplar}
      />
      <Route exact path="/nuevoejemplar" component={NuevoLibro} />
      <Route exact path="/homeadmin" component={HomeAdmin} />
      <Route
        exact
        path="/nuevoejemplar/:id_ejemplar/edit"
        component={NuevoLibro}
      />
      <Route exact path="/homeadmin/:correo" component={HomeAdmin} />
      <Route exact path="/:correo/nuevoejemplar" component={NuevoLibro} />
      <Route
        exact
        path="/:correo/nuevoejemplar/:id_ejemplar/edit"
        component={NuevoLibro}
      />
      {/* <Route
        exact
        path="/detallejemplar/:id_ejemplar"
        component={DetalleEjemplar}
      /> */}
      <Route exact path="/carrito/" component={Carrito} />

      <Route exact path="/prueba" component={prueba} />
      <Route exact path="/res" component={AdmResenias} />


      <Route exact path="/resenias/:correo" component={AdmResenias} />
      <Route exact path="/misdatos2admin/:correo/edit" component={Misdatos2Admin} />

      <Route exact path="/miscompras" component={MisCompras} />
    </BrowserRouter>
  );
}

export default App;
