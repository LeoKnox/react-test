export default function Room() {
  const rooms = [
    {id:1, name: "entry", width: 5}
  ]
  return (
    <>
    <svg width="1000" height="1000">
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x="100" y="400" width={60*room.width} height={60*room.width} fill="red"/>
      </>
    ))}
    <rect x="10" y="10" width="200" height="300" fill="blue"/>
    </svg>
    </>
  );
};
