import React, { useState, useEffect } from 'react'

export default function CartCourses(props) {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        setCourses(props.courses.edges)
    }
        , [props])

    return (
        <div>
            {console.log(courses)}
            <h1>Hey this is courses cart section </h1>
        </div>
    )
}
