import { Container, Table } from "react-bootstrap";
import ItemProducto from "./productos/ItemProducto";
import  {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Administrador = () => {
    const [productos, setProductos] = useState([]);


    useEffect(()=>{
        consultarAPI().then((respuesta)=>{
            setProductos(respuesta)
        })
        
    }, [])

  return (
    <Container className="mainSection"> 
        <article className="d-flex justify-content-between align-items-center">
            <h1 className="display-3 mt-3">Productos disponibles</h1>
            <Link className="h-100 btn btn-primary me-1" to="/administrar/crear">
                Agregar
            </Link>
        <hr />
        </article>
        <Table responsive striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Cod</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto)=><ItemProducto key={producto._id} producto={producto} setProductos={setProductos} />)
                }
                <ItemProducto/>
            </tbody>
        </Table>
    </Container>
  );
};

export default Administrador;
