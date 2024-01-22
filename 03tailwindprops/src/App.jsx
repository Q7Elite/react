import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Karich",
    age: 32,
    address: {
      city: "Juja",
      state: "Kiambu",
      country: "Kenya",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Karichu" myArr={newArr}></Card>
      <Card username="Jack" post="Staff engineer"></Card>
      <Card></Card>
    </>
  );
}

export default App;
