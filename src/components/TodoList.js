import {useState} from "react";
import {Button, Card, Form,} from 'react-bootstrap';


function Todo({todo, index, markTodo, removeTodo}) {
    return (
        <Form className="todo">
            <Form.Group className="mb-1"
                        controlId="exampleForm.ControlInput1">
                <Form.Control plaintext
                              readOnly
                              className="input-card"
                              type="textarea"
                              style={{textDecoration: todo.isDone ? "line-through" : ""}}
                              placeholder={todo.title}/>
            </Form.Group>
            <Form.Group className="mb-1"
                        controlId="exampleForm.ControlInput1">
                <Form.Control plaintext
                              readOnly
                              className="input-card"
                              type="textarea"
                              style={{textDecoration: todo.isDone ? "line-through" : ""}}
                              placeholder={todo.description}/>
            </Form.Group>
            <Form.Group className="mb-1"
                        controlId="exampleForm.ControlInput1">
                <Form.Control plaintext
                              readOnly
                              className="input-card"
                              type="textarea"
                              style={{textDecoration: todo.isDone ? "line-through" : ""}}
                              placeholder={todo.date}/>
            </Form.Group>
            <Form.Group controlId="formFileSm"
                        className="file-input">
                <Form.Control type="file"
                              size="sm"/>
            </Form.Group>
            <Button className="success-button"
                    onClick={() => markTodo(index)}>✓</Button>{' '}
            <Button className="cancel-button"
                    onClick={() => removeTodo(index)}>✕</Button>
        </Form>
    );
}


function FormTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!title || !description || !date) return;
        console.log(title, description, date);
        addTodo({title, description, date});
        // setTitle("");
        // setDescription("");
    };

    return (
        <Form onSubmit={handleSubmit}
              className="pb-2">
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text"
                              className="input"
                              value={title}
                              onChange={e => setTitle(e.target.value)}
                              placeholder="Title"/>
                <br/>
                <Form.Control type="text"
                              className="input"
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                              placeholder="Description"/>
                <br/>
                <Form.Control type="date"
                              className="input"
                              value={date}
                              onChange={e => setDate(e.target.value)}
                              placeholder="Date"/>
            </Form.Group>
            <Button className="submit-button" type="submit">
                Submit
            </Button>
        </Form>
    );
}


function TodoList() {
    const [todos, setTodos] = useState([
        {
            title: "This is a sample todo",
            description: "Description",
            date: "Deadline date",
            isDone: false
        }
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
                <h1>TodoList React App</h1>
                <FormTodo addTodo={addTodo}/>
                <div>
                    {todos.map((todo, index) => (
                        <Card>
                            <Card.Body>
                                <Todo
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    markTodo={markTodo}
                                    removeTodo={removeTodo}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
    );
}

export default TodoList;