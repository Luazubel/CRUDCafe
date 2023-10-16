import { Card, Badge, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";

const DetalleProducto = () => {
  const [producto, setProducto] = useState("");
  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.state === 200) {
        setProducto(respuesta.dato);
      }
    });
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <Card className="w-75 d-flex flex-row my-5">
        <Card.Img className="w-50" src={producto.imagen}></Card.Img>
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <hr />
          <Badge bg="sucess" className="mb-3">
            {producto.categoria}
          </Badge>
          <Card.Text>Precio: $ {producto.precio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
