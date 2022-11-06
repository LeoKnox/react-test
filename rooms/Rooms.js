export default function Room() {
  const rooms = [
    {id:1, name: "entry", x:1, y:1, width: 5, height: 5}
  ]
  return (
    <>
    <svg width="1000" height="1000">
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x={y} y={x} width={60*room.width} height={60*room.width} fill="red"/>
      </>
    ))}
    </svg>
    </>
  );
};
