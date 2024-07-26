import { useState } from "react";

import "./App.css";
import NamePicker from "./NamePicker";

function App() {
  const babyNames = [
    "Arial",
    "Betty",
    "Veronica",
    "Kristin",
    "Scarlett",
    "Joanna",
    "Mercedes",
    "Abby",
    "Ellie",
    "Ella",
    "Taylor",
    "Selena",
    "Sabrina",
  ];

  const [name, setName] = useState(babyNames[0]);
  return (
    <>
      <NamePicker name={name} setName={setName} babyNames={babyNames} />
    </>
  );
}

export default App;
