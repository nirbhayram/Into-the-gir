import React, {useEffect, useState} from 'react'
import Axios from "axios";
import {Container,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

const App = () => {
    const [details, setDetails] = useState({})
    const fetchDetails = async ()=>{
        const response = await Axios.get("https://randomuser.me/api/")
        let details = response.data
        setDetails(details)
        console.log(response.data.results)
        response.data.results.map((item)=>{console.log(`${item.name.title} ${item.name.first} ${item.name.last}`)})
    }
    useEffect(()=>{
        fetchDetails()
    },[])
    return (
        <div>
            <h2>Nirbhay</h2>
        </div>
    )
}

export default App;
