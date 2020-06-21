import React from 'react'
import { Card, CardTitle, CardImg, CardHeader, CardBody } from 'reactstrap'

export default function UserCard({user}) {
    return (
        <Card body outline className="text-center mt-3 mb-20">
            <CardHeader>{user.login}</CardHeader>
            <CardImg src={user.avatar_url}/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-info"> Followers : {user.followers}</div>
            </CardBody>
        </Card>
    )
}
