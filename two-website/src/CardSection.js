import React from "react"
import Card from "./Card";

const CardSection = () => (
    <section className="contact bg-success ">
        <div className="container ">
            <h2 className="text-white">
                We love new friends!
            </h2>
            <div className="row">
                <Card title={"Title 1"} subtitle={"This is subtitle 1"} buttonText={"Go here 1"}/>
                <Card title={"Title 1"} subtitle={"This is subtitle 1"} buttonText={"Go here 1"}/>
                <Card title={"Title 1"} subtitle={"This is subtitle 1"} buttonText={"Go here 1"}/>
                <Card title={"Title 1"} subtitle={"This is subtitle 1"} buttonText={"Go here 1"}/>
                <Card title={"Title 1"} subtitle={"This is subtitle 1"} buttonText={"Go here 1"}/>
                <Card title={"Title 1"} subtitle={"This is subtitle 1"} buttonText={"Go here 1"}/>
            </div>
        </div>
    </section>
)

export default CardSection