export default function Rooms3(rooms) {
  console.log(rooms.rooms);

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

  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <table>
        {displayRoom(room)}
      </table>
    ))}
    for (let x = 0; x < 8; x++) {
      <p>{x}</p>
    }
    </>
  )
}
