export default function Rooms3(rooms) {
  console.log(rooms.rooms);
  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <>
      <p>{room.name}</p>
      <>
        {for(let i = 0; i < room.length; i++) {
          <div>
            <h1>{i}</h1>
          </div>
        }}
        </>
      </>
    ))}
    </>
  )
}
