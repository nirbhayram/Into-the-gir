import React from "react"
import {
    Card,
    CardBody,
    CardText,
    Button,
    CardTitle,
    CardImg
} from "reactstrap"

const CardItem = ({product,addItemToCart})=>{
    return (
        <Card className="mt-2 mb-1">
            <CardImg
            top
            height="250"
            width="100%"
            src={product.smallPhoto}
            />
            <CardBody className="text-center">
                <CardTitle>{product.name}</CardTitle>
                <CardText className="secondary">Price is {product.price}</CardText>
                <Button color="success" onClick={()=>addItemToCart(product)}>Buy now</Button>
            </CardBody>
        </Card>
    )
}

export default CardItem;