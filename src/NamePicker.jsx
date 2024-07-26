import { useState } from "react";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function NamePicker({ name, setName, babyNames }) {
  const [favoriteNames, setFavoriteNames] = useState([]);

  function handleThumbsUp() {
    setFavoriteNames((prevFavorites) => [...prevFavorites, name]);
    const position = babyNames.indexOf(name);
    const nextPosition = getNextIndex(babyNames, position);
    console.log(`Liked ${name}`);
    setName(babyNames[nextPosition]);
  }

  function handleThumbsDown() {
    const position = babyNames.indexOf(name);
    const nextPosition = getNextIndex(babyNames, position);
    setName(babyNames[nextPosition]);
  }

  function getNextIndex(list, currentIndex) {
    return (currentIndex + 1) % list.length;
  }

  console.log(favoriteNames);

  return (
    <>
      <div className="name-picker-wrapper">
        <div className="current-name user-select-none">{name}</div>
        <div className="decision-wrapper">
          <div className="decision-button">
            {" "}
            <FaThumbsUp className="icon-green" onClick={handleThumbsUp} />{" "}
          </div>
          <div className="decision-button">
            {" "}
            <FaThumbsDown
              className="icon-red"
              onClick={handleThumbsDown}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
