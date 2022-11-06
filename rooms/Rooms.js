export default function Room() {
  const rooms = [
    {id:1, name: "entry", x:1, y:1, width: 5, height: 5},
    {id:2, name: "second", x:6, y:4, width: 7, height: 4}
  ]
  return (
    <>
    <svg width="1000" height="1000">
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x={9*room.x} y={9*room.y} width={12*room.width} height={12*room.height} fill="blue"/>
      <rect x={10*room.x} y={10*room.y} width={10*room.width} height={10*room.height} fill="red"/>
      </>
    ))}
    </svg>
    </>
  );
};
