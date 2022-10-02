import './App.css';
import NewList from './list.js';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Something</h1>
        <div className="input">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
          {todoList.map ((task) => (
            <p>{task}</p>
          ))}
        </div>
        <NewList iList={todoList} />
      </header>
    </div>
  );
}

export default App;
