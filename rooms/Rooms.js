export default function Room() {
  const rooms = [
    {id:1, name: "entry", x:0, y:0, width: 5, height: 5},
    {id:2, name: "second", x:6, y:4, width: 7, height: 4}
  ]
  return (
    <>
    <svg width="1000" height="1000">
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x={10*room.x} y={10*room.y} width={10*room.width} height={10*room.height} fill="red" style={{border:'2px solid blue'}}/>
      </>
    ))}
    </svg>
    </>
  );
};
