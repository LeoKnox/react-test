import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [a, setA] = useState([]);
  const data = [1,2];

  useEffect(() => {
    setA(data);
    return(a);
  },[a]);
  
  function clickButton() {
    console.log("dddd");
    let newA = a;
    newA[1] = 5;
    setA(newA);
    return(a);
    console.log("***"+a);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Heading</h1>
        <button onClick={clickButton}>click</button>
        {a.map((letter) => (
          <p>{letter}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
