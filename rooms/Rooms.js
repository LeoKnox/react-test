export default function Room() {
  const rooms = [
    {id:1, name: "entry"}
  ]
  return (
    <>
    <h1>show rooms here</h1>
    {rooms.map(room => (
      <p>{room.name}</p>
    ))}
    </>
  );
};
