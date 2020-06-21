import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BuyPage from './Components/BuyPage';
import "bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  toast.configure();
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
      });
      return
    }
    setItems([...items, item]);
  }

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const purchaseItems = () => {
    toast("All items purchased.", {
      type: "success"
    });
    setItems([]);
  }

  return (
    <div className="App">
      <BuyPage addItemToCart={addItemToCart} />
    </div>
  );
}

export default App;
