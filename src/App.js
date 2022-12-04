import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList React App</h1>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
