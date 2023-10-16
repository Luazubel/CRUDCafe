import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./components/views/Inicio"
import Administrador from "./components/views/Administrador"
import Error404 from "./components/views/Error404"
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer";
import DetalleProducto from "./components/views/productos/DetalleProducto"
import CrearProducto from "./components/views/productos/CrearProducto"
import EditarProducto from "./components/views/productos/EditarProducto"

function App() {
  

  return (
     //administrar las rutas
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      {/* las rutas siempre son el dominio + el path */}
      <Route exact path="/" element={<Inicio></Inicio>}>
      </Route>
      <Route exact path="/administrar" element={<Administrador></Administrador>} />
      <Route path="*" element={<Error404/>}>
      </Route>
      <Route exact path="/administrar/detalle" element={<DetalleProducto/>} />
      <Route exact path="/administrar/crear" element={<CrearProducto/>} />
      <Route exact path="/administrar/editar/:id" element={<EditarProducto/>} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
