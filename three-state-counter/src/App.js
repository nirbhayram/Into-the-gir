import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count , setCount] = useState(0);
  return (
    <div className="App">
      <h2>The counter is {count}</h2>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=> count>9?"":setCount(count+1)} >Increment</button>
      <button onClick={()=>count<1?"":setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
