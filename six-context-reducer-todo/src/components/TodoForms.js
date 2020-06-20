import React, {useContext,useState} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import { v4 } from "uuid";
import {ADD_TODO} from "../context/action.types"
import {TodoContext} from "../context/TodoContext"

const TodoForm = ()=>{
    const [todo,setTodo] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(todo===""){
            return alert("Please enter todo.");
        }
        const todoObject = {
            todo,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todoObject
        });
        setTodo("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="tood"
                        id="todo"
                        placeholder="Enter your todo task"
                        value={todo}
                        onChange={e=>setTodo(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="warning"
                        >Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;