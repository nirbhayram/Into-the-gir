import React, {useContext} from "react"

import {TodoContext} from "../context/TodoContext";
import {REMOVE_TODO} from "../context/action.types";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todo = ()=>{

    const {todos,dispatch} = useContext(TodoContext);

    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map((todo)=>(
                <ListGroupItem key={todo.id}>
                    {todo.todo}
                    <span
                        className="float-right"
                        onClick={()=>{
                            dispatch(
                                {
                                    type:REMOVE_TODO,
                                    payload:todo.id
                                }
                            )
                        }}
                    >
                        <FaCheckDouble/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )

}

export default Todo