import "./styles.css";
import Room from "./Rooms.js";
import Rooms2 from "./Rooms2.js";
import Rooms3 from "./Rooms3.js";

export default function App() {
  const rooms = [
    {id:1, name: "entry", x:2, y:2, width: 6, height: 5},
    {id:2, name: "second", x:12, y:4, width: 7, height: 4}
  ]

  return (
    <div className="App">
      <Rooms3 />
    </div>
  );
}
