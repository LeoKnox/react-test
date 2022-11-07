export default function Room() {
  const rooms = [
    {id:1, name: "entry", x:2, y:2, width: 6, height: 5},
    {id:2, name: "second", x:6, y:4, width: 7, height: 4}
  ]

  function Box() {
    return(<rect x="0" y="0" width="10" height="10" fill="orange" />);
  }
  
  return (
    <>
    <svg width="10000" height="10000">
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x={9*room.x} y={9*room.y} width={12*room.width} height={12*room.height} fill="blue"/>
      <rect x={10*room.x} y={10*room.y} width={10*room.width} height={10*room.height} fill="red"/>
      </>
    ))}
    <rect x={10*rooms[0].x} y={10*rooms[0].y} width={10*rooms[0].width} height={10*rooms[0].height} fill="green"/>
    <Box />
    </svg>
    </>
  );
};
