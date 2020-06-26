import React from 'react'

export default function Heading({title}) {
    return (
        <div className="row">
            <div className="text-center mb-2 col"> 
                <h1 className="dsiplay-3">{title}</h1>
            </div>
        </div>
    )
}
