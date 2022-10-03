import './App.css';
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

  const deleteTask = (taskName) => {
    const newArr = todoList.filter((name) => {
      return (taskName !== name);
    })
    setTodoList(newArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Something</h1>
        <div className="input">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <table>
            {todoList.map ((task) => (
                <tr>
                    <td>{task}</td>
                    <td>
                        <button onClick={() => deleteTask(task)}>X</button>
                    </td>
                </tr>
            ))}
        </table>
      </header>
    </div>
  );
}

export default App;
