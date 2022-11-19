import "./styles.css";
import {useState, useEffect} from 'react';

export default function App() {
  const [red, setRed] = useState([]);
  useEffect(() => {
    setRed([1,2]);
  }, [red]);
  return (
    <div className="App">
      {red.map(g => (
        <p>{g}</p>
      ))}
    </div>
  );
}
