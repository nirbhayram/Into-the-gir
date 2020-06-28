import React, { useState, useEffect } from 'react'
import Heading from "../resuable/Heading"

export default function CartCourses(props) {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(props.courses.edges)
    }
        , [props])

    return (
        <section className="my-2 mx-2 py-4">
            <div className="container">
                <Heading title={"Courses"} />
                <div className="row">

                    {courses.map((course) => (
                        <div className="col-3 my-1" key={course.node.id}>
                            <div className="card" >
                                <img src={course.node.image.fixed.src} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.node.title}</h5>
                                    <p className="card-text">{course.node.description}</p>
                                    <button
                                        className="btn btn-warning btn-block btn-lg snipcart-add-item"
                                        data-item-id={course.node.id}
                                        data-item-name={course.node.title}
                                        data-item-price={course.node.price}
                                        data-item-url="http://myapp.com/products/bacon"
                                        data-item-description={course.node.description}
                                        data-item-image={course.node.image.fixed.src}
                                    >
                                        Buy for ${course.node.price}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
