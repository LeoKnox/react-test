import {useState} from "react";

export default function Rooms3(rooms) {
  /*
  const [grid, setGrid] = useState([['*','*','*'],
  ['*','*','*'],
  ['*','*','*']]);*/
  const [grid, setGrid] = useState(
    Array(4).fill(null).map(()=>Array(4).fill('*'))
  )
  console.log(grid);
  let x = 50;
  let y = 50;

  const displayTile = (room) => {
    let td = [];
    for (let i = 1; i < room.width; i++) {
      td.push(<td key={i}>{i}</td>);
    }
    return td;
  };

  const displayRoom = (room) => {
    let tr=[];
    for (let j = 1; j < room.height; j++) {
      tr.push(<tr>{displayTile(room)}</tr>)
    }
    return tr
  }

  const createMap = () => {
    let myMap=[];
    for (let m = 1; m < x; m++) {
      myMap.push(<p id={m}>*</p>)
    }
    return myMap;
  }

  const buttonClick = (e) => {
    e.preventDefault();
    let newGrid = grid;
    console.log(newGrid[0,0]);
    newGrid[0,0] = "+";
    setGrid(newGrid);
    console.log(grid);
    return(grid);
  }

  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <table>
        {displayRoom(room)}
      </table>
    ))}
    <button onClick={buttonClick}>click</button>
    {createMap()}
    </>
  )
}
