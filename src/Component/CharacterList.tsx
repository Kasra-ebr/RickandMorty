import React, { useEffect } from "react";

import { useCharacterContext } from "./Hook/CharacterContext";
import { getCharacters } from "./Server/server";

import Button from "./Button/Button";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

import { FaCheckToSlot } from "react-icons/fa6";
import { ICharacter } from "./Type/Type";
function CoinList() {
  const {
    characters,
    setCharacters,
    selectedId,
    handleCharacter,
    filteredItems,
    searchHandler,
    search,
  } = useCharacterContext();

  useEffect(() => {
    getCharacters().then((res) => {
      setCharacters(res);
    });

    searchHandler();
  }, [search]);
  return (
    <div className="character__list">
    {(filteredItems.length === 0 ? characters : filteredItems)
      .slice(0, 4)
      .map((item) => (
        <Character key={item.id} char={item}>
          <Button onClick={() => handleCharacter(item.id)}>
            {selectedId === item.id ? (
              <EyeSlashIcon
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "red",
                }}
              />
            ) : (
              <EyeIcon  className="icon-style" />
            )}
          </Button>
        </Character>
      ))}
  </div>
  );
}

export default CoinList;



interface ITCharacter {
  children :React.ReactNode;
  char:ICharacter;
}

export function Character({ children, char }: ITCharacter) {
    return (
        <div className='list__item'>
       <img src={char.image} alt={char.name} />
          <div>
          <h1> <span>{char.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
          <span> {char.name}</span></h1>
          <h2>
          <span className={`status ${char.status === "Dead" ? "red" : ""}`}></span>
           <span> {char.status} </span>
         <span> - {char.species}</span>
          </h2>
          </div>
          <span className='list__item__button'>{children}</span>
      
        </div>
    )
}
