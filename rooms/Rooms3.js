export default function Rooms3(rooms) {
  console.log(rooms.rooms);
  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map((room) => {
      console.log(room.name);
    })}
    </>
  )
}
