import { useState } from "react";
import Result from "./Result";

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function NamePicker({
  name,
  setName,
  babyNames,
  favoriteNames,
  setFavoriteNames,
}) {
  function handleThumbsUp() {
    setFavoriteNames((prevFavorites) => [...prevFavorites, name]);
    const nextPosition = getNextIndex(babyNames, name);
    console.log(`Liked ${name}`);
    if (nextPosition < babyNames.length) {
      setName(babyNames[nextPosition]);
    } else {
      setName(null); //end of list reached
    }
  }

  function handleThumbsDown() {
    const nextPosition = getNextIndex(babyNames, name);
    if (nextPosition < babyNames.length) {
      setName(babyNames[nextPosition]);
    } else {
      setName(null); // end of list reached
    }
  }

  function getNextIndex(list, name) {
    const position = list.indexOf(name);
    return position + 1;
  }

  console.log(favoriteNames);

  if (name === null) {
    return <Result favoriteNames={favoriteNames} />;
  } else {
    return (
      <>
        <div className="name-picker-wrapper">
          <div className="current-name user-select-none">{name}</div>
          <div className="decision-wrapper">
            <div className="decision-button">
              {" "}
              <FaThumbsUp
                className="icon-green"
                onClick={handleThumbsUp}
              />{" "}
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
}
