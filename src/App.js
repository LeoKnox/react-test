import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Something</h1>
        <div className="input">
          <input onChange={handleChange} />
          <button>Add Task</button>
        </div>
        <div className="list">
          <p>{newTask}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
