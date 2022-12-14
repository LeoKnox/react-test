import { useState, useEffect } from "react";

export default function Rooms3(rooms) {
  /*
  const [grid, setGrid] = useState([['*','*','*'],
  ['*','*','*'],
  ['*','*','*']]);*/
  let x = 50;
  let y = 50;
  const [grid, setGrid] = useState(
    Array(x)
      .fill(null)
      .map(() => Array(y).fill("*"))
  );
  useEffect(() => {
    grid[0][0] = 0;
    console.log(grid);
  },[grid]);

  const displayTile = (room) => {
    let td = [];
    for (let i = 1; i < room.width; i++) {
      td.push(<td key={i}>{i}</td>);
    }
    return td;
  };

  const displayRoom = (room) => {
    let tr = [];
    for (let j = 1; j < room.height; j++) {
      tr.push(<tr>{displayTile(room)}</tr>);
    }
    return tr;
  };

  const createMap = (param=0) => {
    if (param > 0) {
      let newGrid=grid;
      newGrid[1][1] = "H";
      setGrid(newGrid);
    }
    console.log(grid);
    return grid.map((row) => (
      <tr>
        {row.map((cel) => (
          <td>{cel}</td>
        ))}
      </tr>
    ));
    /*
    let myMap=[];
    for (let m = 1; m < x; m++) {
      myMap.push(<p id={m}>*</p>)
    }
    return myMap;*/
  };

  const buttonClick = (e) => {
    let newGrid = grid;
    newGrid[0][0] += 1;
    setGrid(newGrid);
    console.log(grid+"t");
    return(grid);
  };

  return (
    <>
      <h1>New Rooms</h1>
      {rooms.rooms.map((room) => (
        <table>{displayRoom(room)}</table>
      ))}
      <button onClick={buttonClick}>click</button>
      <button onClick={createMap}>clock</button>
      {createMap()}
      {grid.map(g => (
        g.map(h => (
          <p>{h}</p>
        ))
      ))}
    </>
  );
}
