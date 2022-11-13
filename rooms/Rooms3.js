export default function Rooms3(rooms) {
  console.log(rooms.rooms);

  const displayTile = (room) => {
    let td = [];
    for (let i = 1; i <= room.width; i++) {
      td.push(<td key={i}>{i}</td>);
    }
    return td;
  };

  const displayRoom = (room) => {
    return (
      <>
        <tr>
          {displayTile(room)}
        </tr>
      </>
    )
  }

  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <table>
        {displayRoom(room)}
      </table>
    ))}
    </>
  )
}
