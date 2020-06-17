import React, { useState } from 'react';
import Icon from "./components/Icon"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';

const itemArray = new Array(9).fill("empty");

function App() {

	const [isCross, setIsCross] = useState("fasle");
	const [winMessage, setWinMessage] = useState("");

	const reload = () => {
		setIsCross("false");
		setWinMessage("");
		itemArray.fill("empty");
	}

	const checkIsWinner = () => {

	}

	const changeItem = (itemNumber) => {
		if (winMessage) {
			return toast(winMessage, { type:"success" })
		} else {
			if (itemArray[itemNumber] === "empty") {
				isCross ? itemNumber[itemNumber] = "cross" : itemNumber[itemNumber] = "circle"
				setIsCross(!isCross);
			}
			else {
				return toast("Already filled", { type:"error" })
			}
		}
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
							<Card>
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
