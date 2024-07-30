import { useState } from "react";

import "./App.css";
import NamePicker from "./NamePicker";
import NewSession from "./NewSession";
import BabySelection from "./BabyComponents";

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
  const [favoriteNames, setFavoriteNames] = useState([]);

  return (
    <>
      <BabySelection />
      {/* <NewSession />
      <NamePicker
        name={name}
        setName={setName}
        babyNames={babyNames}
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
      /> */}
    </>
  );
}

export default App;
