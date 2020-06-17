import React, { useState } from 'react';
import Icon from "./components/Icon"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';

const itemArray = new Array(9).fill("empty");
let count = 0;

function App() {

	const [isCross, setIsCross] = useState("fasle");
	const [winMessage, setWinMessage] = useState("");

	const checkCount=()=>{
		count++;
		if(count === 9){
			setWinMessage("Game tie")
		}
	}

	const reload = () => {
		setIsCross("false");
		setWinMessage("");
		count =0;
		itemArray.fill("empty");
	}

	const checkIsWinner = () => {
		if(itemArray[0]===itemArray[1]&&
			itemArray[1]===itemArray[2]&&
			itemArray[0]!=="empty"
		){
			setWinMessage(itemArray[0]+" is winner")
		}else if(itemArray[3]===itemArray[4]&&
			itemArray[3]===itemArray[5]&&
			itemArray[3]!=="empty"
		){
			setWinMessage(itemArray[3]+" is winner")
		}else if(itemArray[6]===itemArray[7]&&
			itemArray[6]===itemArray[8]&&
			itemArray[6]!=="empty"
		){
			setWinMessage(itemArray[6]+" is winner")
		}else if(itemArray[0]===itemArray[3]&&
			itemArray[0]===itemArray[6]&&
			itemArray[0]!=="empty"
		){
			setWinMessage(itemArray[0]+" is winner")
		}else if(itemArray[1]===itemArray[4]&&
			itemArray[1]===itemArray[7]&&
			itemArray[1]!=="empty"
		){
			setWinMessage(itemArray[1]+" is winner")
		}else if(itemArray[2]===itemArray[5]&&
			itemArray[2]===itemArray[8]&&
			itemArray[2]!=="empty"
		){
			setWinMessage(itemArray[2]+" is winner")
		}else if(itemArray[0]===itemArray[4]&&
			itemArray[0]===itemArray[8]&&
			itemArray[0]!=="empty"
		){
			setWinMessage(itemArray[0]+" is winner")
		}else if(itemArray[2]===itemArray[4]&&
			itemArray[2]===itemArray[6]&&
			itemArray[2]!=="empty"
		){
			setWinMessage(itemArray[2]+" is winner")
		}
	}

	const changeItem = (itemNumber) => {
		if (winMessage) {
			return toast(winMessage, { type:"success" })
		} else {
			if (itemArray[itemNumber] === "empty") {
				isCross ? itemArray[itemNumber] = "cross" : itemArray[itemNumber] = "circle"
				setIsCross(!isCross);
			}
			else {
				return toast("Already filled", { type:"error" })
			}
		}
		checkIsWinner();
		checkCount();
	}

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winMessage ? (
						<div>
							<h2 className="text-primary text-uppercase text-center">{winMessage}</h2>
							<Button className="md-2" color="success" block onClick={reload}>Reload the game</Button>
						</div>
					) : (
							<h2 className="text-center text-warning">{isCross?("Cross"):("Circle")}'s turn</h2>
						)}
					<div className="grid">
						{itemArray.map((item, index) => (
							<Card key={index} onClick={()=>changeItem(index)}>
								<CardBody className="box">
									<Icon name={item} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
