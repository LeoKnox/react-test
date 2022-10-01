import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Something</h1>
        <div className="input">
          <input></input>
          <button>Add Task</button>
        </div>
      </header>
    </div>
  );
}

export default App;
