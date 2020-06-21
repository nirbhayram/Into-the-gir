import React, {useState,useEffect} from "react"
import {Container,Row,Col} from "reactstrap"
import Axios from "axios"
import {random,commerce} from "faker"

const BuyPage = ()=>{
    const [products, setProducts] = useState([]);

    const URL = "https://extendsclass.com/api/json-storage/bin/cacdaad"

    const fetchProduct = async ()=>{
        const {data} = await Axios.get(URL);
        const photos = data.photos;
        console.log(data);
        const tempProducts = photos.map((photo)=>{
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
            <Row>
                {products.map(product=>(
                    <span key={product.id}>
                        {product.tinyPhoto}<br/>
                    </span>
                ))}
            </Row>
        </Container>
    );

}

export default BuyPage;