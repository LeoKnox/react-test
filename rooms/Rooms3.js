export default function Rooms3(rooms) {
  console.log(rooms);
  return(
    <h1>New Rooms</h1>
    rooms.map(room => (
      <p>{room.name}</p>
    ))
  )
}
