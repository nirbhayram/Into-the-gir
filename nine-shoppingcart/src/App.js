import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { toast } from 'react-toastify';
import BuyPage from './Components/BuyPage';


function App() {
  const [items, setItems] = useState([]);

  const addItem = (item)=>{
    const isAlreadyAdded = items.find((i)=>i.id===item.id)
    if (isAlreadyAdded!==-1) {
      return toast("Item is already in cart",{
        type:"error"
      });
    }
    setItems([...items,item])
  }

  const removeItem = (id)=>{
    setItems(items.filter((item)=>item.id!==id))
  }

  const purchaseItems = ()=>{
    toast("All items purchased.", {
      type:"success"
    });
    setItems([]);
  }

  return (
    <div className="App">
      <BuyPage></BuyPage>
    </div>
  );
}

export default App;
