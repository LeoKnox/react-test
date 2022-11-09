import {useState} from "react";

export default function Room() {
  const [base, setBase] = useState(20);
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
      ${base*room.room.x},${base*room.room.y}
      ${base*room.room.x},${base*room.room.y+base*room.room.height}
      ${base*room.room.x+base*room.room.width},${base*room.room.y+base*room.room.height}
      ${base*room.room.x+base*room.room.width},${base*room.room.y}
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
    <div className="rotate">
    <svg width="1000" height="1000">
    {rooms.map(room => (
      <>
      <Tile room={room} />
      </>
    ))}
    </svg>
    </div>
  );
};
