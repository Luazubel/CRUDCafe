import {Card, Badge,} from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <>
        <Card className="container border rounded my-3 flex-row">
            <Card.Img className="" variant="start" src=""></Card.Img>
            <Card.Body> 
                <div className="">
                    <Card.Title>Brownie</Card.Title>
                    <hr />
                    <Card.Text className="mt-3 fw-bold">Precio: $300</Card.Text>
                </div>
            </Card.Body>

        </Card>
        </>
    );
};

export default DetalleProducto;