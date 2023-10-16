import { Col, Card, Button } from "react-bootstrap";

const CardProducto = () => {
  return (
    <>
      <Col className="my-3">
        <Card className="">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Brownie</Card.Title>
            <Card.Text>Precio: $400</Card.Text>
            <hr />
            <Button variant="danger">Ver mas</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardProducto;
