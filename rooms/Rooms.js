export default function Room() {
  const rooms = [
    {id:1, name: "entry", x:2, y:2, width: 6, height: 5},
    {id:2, name: "second", x:12, y:4, width: 7, height: 4}
  ]

  function Box(test) {
    console.log(test);
    return(
      <rect
        x={10*test.test.x}
        y={10*test.test.y}
        width={10*test.test.width}
        height={10*test.test.height}
        fill="gray"
        stroke-width="10"
        stroke="brown"
      />
    );
  }

  function Tile(room) {
    let test = `
      ${10*room.room.x},${10*room.room.y}
      ${10*room.room.x},${10*room.room.y+10*room.room.height}
      ${10*room.room.x+10*room.room.width},${10*room.room.y+10*room.room.height}
      ${10*room.room.x+10*room.room.width},${10*room.room.y}
    `;
    return(
      <polygon
        points = {test}
        stroke-width = "10"
        stroke="rgb(6,6,6)"
        fill="blue"
      />
    )
  }

  return (
    <>
    <svg width="10000" height="10000">
    {rooms.map(room => (
      <>
      <Tile room={room} />
      </>
    ))}
    </svg>
    </>
  );
};
