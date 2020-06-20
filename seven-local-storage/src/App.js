import React, {useState, useEffect} from 'react';
import {Container} from "reactstrap"
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = ()=>{
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos");
    if (localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[])

  const addTodo= async (todo)=>{
    setTodos([...todos,todo])
  }

  const markComplete = (id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
      <Container fluid>
        <h1>This is todo application with local storage</h1>
        <Todos todos={todos} markComplete={markComplete}/>
        <TodoForm addTodos={addTodo}/>
      </Container>
  );
}


export default App;
