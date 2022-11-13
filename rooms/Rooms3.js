export default function Rooms3(rooms) {
  console.log(rooms.rooms);
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
      myMap.push(<p>*</p>)
    }
    return myMap;
  }

  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <table>
        {displayRoom(room)}
      </table>
    ))}
    {createMap}
    </>
  )
}
