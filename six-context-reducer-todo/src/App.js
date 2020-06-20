import React, {useReducer} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import todoReducer from "./context/reducer"
import {TodoContext} from "./context/TodoContext";
import Container from "reactstrap/lib/Container";
import TodoForm from "./components/TodoForms";

function App() {
    const [todos, dispatch] = useReducer(todoReducer, [])
    return (
        <TodoContext.Provider value={{todos,dispatch}}>
            <Container fluid>
                <h1>This is todo application with context API</h1>
                <TodoForm/>
            </Container>
        </TodoContext.Provider>
    )
}

export default App;
