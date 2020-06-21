import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import Axios from "axios"
import { random, commerce } from "faker"
import CardItem from "./CardItem"

const BuyPage = ({ addItemToCart }) => {
    const [products, setProducts] = useState([]);

    const URL = "https://extendsclass.com/api/json-storage/bin/cacdaad"

    const fetchProduct = async () => {
        const { data } = await Axios.get(URL);
        const photos = data.photos;
        const tempProducts = photos.map((photo) => {
            return {
                smallPhoto: photo.src.small,
                tinyPhoto: photo.src.tiny,
                name: random.word(),
                price: commerce.price(),
                id: random.uuid()
            }
        });
        setProducts(tempProducts);
    }

    useEffect(() => {
        fetchProduct()
    }, []);

    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy page</h1>
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addItemToCart={addItemToCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    );

}

export default BuyPage;