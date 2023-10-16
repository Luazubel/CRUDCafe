import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import CardProducto from "./productos/CardProducto";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <Container className="my-5 ">
      <div className="text-center">
        <h1>Bienvenidos</h1>
        <hr />
      </div>
      <Row>
        {productos.map((producto) => (
          <CardProducto key={producto._id} producto={producto}></CardProducto>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
