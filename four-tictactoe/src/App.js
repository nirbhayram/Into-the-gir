import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from "./components/Icon"

import {ToasContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import {Card, CardBody, Container, Button,Col,Row} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const itemArray = new Array(9).fill("empty");

function App() {

	const [isCross,setIsCross] = useState("fasle");
	const [winMessage,setWinMessage] = useState("");

	const reload = ()=>{
	
	}

	const checkIsWinner = () => {
	
	}

	const changeItem = (itemNumber)=>{
	
	}

	return (
		<div className="App">
			<Icon name="circle" />
		</div>
	);
}

export default App;
