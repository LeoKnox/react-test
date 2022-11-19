import "./styles.css";
import {useState} from 'react';

export default function App() {
  const [red, setRed] = useState([]);
  return (
    <div className="App">
      {red.map(g => (
        <p>{g}</p>
      ))}
    </div>
  );
}
