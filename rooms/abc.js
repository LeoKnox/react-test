import "./styles.css";
import {useState, useEffect} from 'react';

export default function App() {
  const [red, setRed] = useState([]);
  useEffect(() => {
    setRed([1,2]);
  }, [red]);

  function changeRed() {
    let x = red;
    x[1] = 3;
    setRed(x);
    console.log(red);
  }
  return (
    <div className="App">
      <button onClick={changeRed}>click</button>
      {red.map(g => (
        <p>{g}</p>
      ))}
    </div>
  );
}
