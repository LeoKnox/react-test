export default function Rooms3(rooms) {
  console.log(rooms.rooms);
  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => {
      <>
      <p>t</p>
      <p>room.name</p>
      </>
    })}
    </>
  )
}
