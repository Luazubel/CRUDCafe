import { Col, Card, } from "react-bootstrap";
import {Link} from "react-router-dom"

const CardProducto = ({producto}) => {
  return (
    <>
      <Col md={4} className="my-3">
        <Card>
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title>{producto.nombreProducto}</Card.Title>
            <Card.Text>Precio: ${producto.precio}</Card.Text>
            <hr />
            <Link to={`administrar/detalle/${producto._id}`}>Ver mas</Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardProducto;
