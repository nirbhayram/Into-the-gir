import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BuyPage from './Components/BuyPage';
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast, Flip, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col } from "reactstrap"
import Cart from './Components/Cart';


function App() {

	const [items, setItems] = useState([]);

	const addItemToCart = (item) => {
		const isAlreadyAdded = items.findIndex((i) => i.id === item.id)
		if (isAlreadyAdded !== -1) {
			toast.error('Item is already in the cart', {
				position: "bottom-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				transition: Slide
			});
			return
		}
		setItems([...items, item]);
	}

	const removeItem = (id) => {
		setItems(items.filter((item) => item.id !== id))
	}

	const purchaseItems = () => {
		toast('All item purchased', {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			type: "success",
			transition: Flip
		});
		setItems([]);
	}

	return (
		<Container fluid>
			<ToastContainer />
			<Row>
				<Col md="8">
					<BuyPage addItemToCart={addItemToCart} />
				</Col>
				<Col md="4">
					<Cart removeItem={removeItem} products={items} purchaseItems={purchaseItems} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
