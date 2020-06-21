import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Col,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap"

const Cart = ({ products, removeItem, purchaseItems }) => {
    let amount = 0;
    products.forEach((product) => (
        amount = parseFloat(amount) + parseFloat(product.price)
    ));
    return (
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {products.map((product) => (
                    <ListGroupItem key={product.id}>
                        <Row>
                            <Col>
                                <img height={80} src={product.tinyPhoto} />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">{product.name}</div>
                                <span>price :- {product.price}</span>
                                <Button color="danger" onClick={() => removeItem(product.id)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {products.length >= 1 ? (
                <Card className="text-center mt-3">
                    <CardHeader>Grand Total</CardHeader>
                    <CardBody>
                        Your amount for {products.length} product is {amount}
                    </CardBody>
                    <CardFooter>
                        <Button color="success" onClick={purchaseItems}>pay here</Button>
                    </CardFooter>
                </Card>
            ) : (
                    <h1 className="text-warning">Cart is empty</h1>
                )}
        </Container>
    );
}
export default Cart;