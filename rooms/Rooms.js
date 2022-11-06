export default function Room() {
  const rooms = [
    {id:1, name: "entry", width: 5}
  ]
  return (
    <>
    <svg width="100" height="100">
    <h1>show rooms here</h1>
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x={room.width} y={room.width} width="300" height="100" fill="red"/>
      </>
    ))}
    </svg>
    </>
  );
};
