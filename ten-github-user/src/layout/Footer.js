import React from 'react'
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"

export default function Footer() {
    return (
        <Container
            fluid
            tag="footer"
            className="text-center bg-info text-white fixed-bottom p-2"
        >
            all copyrights are reserved by nirbhay-ram.me
        </Container>
    )
}
