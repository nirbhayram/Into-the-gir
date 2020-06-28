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
                                <img src={course.node.image.fixed.src} class="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{course.node.title}</h5>
                                    <p className="card-text">{course.node.description}</p>
                                    <a href="/" className="btn btn-warning btn-block btn-lg">Buy for ${course.node.price}</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
