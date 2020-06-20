import React, {useState} from "react"
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon} from "reactstrap"
import {v4} from "uuid"

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoString === "") {
            return alert("Please enter some todo task.");
        }
        const todo = {
            todoString,
            id: v4()
        }
        addTodos(todo);
        setTodoString("")
    }
    return (
        <Form>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Enter your todo"
                        name="todo"
                        id="todo"
                        value={todoString}
                        onChange={(e) => setTodoString(e.target.value)}
                    >
                    </Input>
                    <InputGroupAddon addonType={"prepend"}>
                        <Button onClick={handleSubmit}>
                            Add todo
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );

}

export default TodoForm