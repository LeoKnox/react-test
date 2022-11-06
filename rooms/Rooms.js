export default function Room() {
  const rooms = [
    {id:1, name: "entry", width: 5}
  ]
  return (
    <>
    <svg width="100%" height="100%">
    {rooms.map(room => (
      <>
      <p>{room.name}</p>
      <rect x="100" y="400" width={60*room.width} height={60*room.width} fill="red"/>
      </>
    ))}
    </svg>
    </>
  );
};
