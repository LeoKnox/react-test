export default function Room() {
  const rooms = [
    {id:1, name: "entry"}
  ]
  return (
    <>
    <svg width="100" height="100">
    <h1>show rooms here</h1>
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect y={room.id} width="300" height="100" fill="red"/>
      </>
    ))}
    </svg>
    </>
  );
};
