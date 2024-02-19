import logo from './logo.svg';
import './App.css';
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
function App() {
  return (
    <div className="App">
     <TodoAdd/>
     <TodoList/>
    </div>
  );
}

export default App;
