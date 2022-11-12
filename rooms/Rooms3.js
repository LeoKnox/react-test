export default function Rooms3(rooms) {
  console.log(rooms.rooms);

  const displayTile = (room) => {
    let td = [];
    for (let i = 1; i <= room; i++) {
      td.push(<td key={i}>{i}</td>);
    }
    return td;
  };

  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <p>{displayTile(room=8)}</p>
    ))}
    </>
  )
}
