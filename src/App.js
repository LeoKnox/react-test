import './App.css';
import NewList from './list.js';
import Red from './red.js';
import Blue from './blue.js';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setTask] = useState("");
  const [comp, setComp] = useState(false);
  const [color, setColor] = useState("Red");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }

  const changeColor = () => {
    setComp(!comp);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Something</h1>
        <div className="input">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <NewList iList={todoList} />
        { comp ? <Red /> : <Blue />}
        <button onClick={changeColor}>Change</button>
        <button onClick={() => setComp(true)}>Red</button>
        <button onClick={() => setComp("Blue")}>Blue</button>
      </header>
    </div>
  );
}

export default App;
