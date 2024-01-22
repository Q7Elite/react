import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  // function changeColor(color) {
  //   setColor(color);

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            style={{ background: "red" }}
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            red
          </button>
          <button
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            blue
          </button>
          <button
            style={{ background: "green" }}
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            green
          </button>
          <button
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            yellow
          </button>
          <button
            style={{ background: "violet" }}
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            violet
          </button>
          <button
            style={{ background: "pink" }}
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
