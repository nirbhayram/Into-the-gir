import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function RepoList({repo_url}) {

    const [repo, setRepo] = useState([])

    const fectRepo = async ()=>{
        const {data}= await Axios.get(repo_url);
        setRepo(data)
    }

    useEffect(()=>{
        fectRepo();
    },[repo_url])

    return (
        <ListGroup>
            {repo.map((r)=>(
                <ListGroupItem key={r.id}>
                    <div className="text-primary">{r.name}</div>
                    <div className="text-secondary">{r.language}</div>
                    <div className="text-info">{r.html_url}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
