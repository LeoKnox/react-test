export default function Room() {
  const rooms = [
    {id:1, name: "entry"}
  ]
  return (
    <>
    <svg width="100" height="100">
    <h1>show rooms here</h1>
    {rooms.map(room => (
      <div key={room.id}>
      <p>{room.name}</p>
      <rect width="300" height="100" style={{fill:"red"}}/>
      </div>
    ))}
    </svg>
    </>
  );
};
