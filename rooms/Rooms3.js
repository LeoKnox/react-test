export default function Rooms3(rooms) {
  console.log(rooms.rooms);
  return(
    <>
    <h1>New Rooms</h1>
    {rooms.rooms.map(room => (
      <>
      <p>{room.name}</p>
      <>
      {for (let i = 0; i < 10; i++) {
        <p>{i}</p>
      }}
    </>
    }
  )
}
