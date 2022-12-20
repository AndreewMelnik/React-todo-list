import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container>
        <TodoList/>
    </Container>
  );
}

export default App;
