
import { useEffect, useState } from "react"

import { getCharacter } from "./Server/server"
import { useCharacterContext } from "./Hook/CharacterContext"
import { ICharacter } from "./Type/Type"
import Button from "./Button/Button"
function CharacterSubList() {
const {selectedId,onAddFavourites,isAddToFavourites} = useCharacterContext()


  const [localCharacter, setLocalCharacter] = useState<ICharacter | null>(null)
  useEffect(()=>{
    if (!selectedId) {
      setLocalCharacter(null); 
      return;
    }
    getCharacter(selectedId).then((res)=> {
      setLocalCharacter(res)

    })
  },[selectedId]) 
  return (
    localCharacter ? (
      <div className="character-detail"> 
        <img src={localCharacter.image} alt={localCharacter.name || "Character"} />
        <div className="character-detail__info">
          <h1>
            <span>{localCharacter.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
            <span> {localCharacter.name}</span>
          </h1>
          <h2>
            <span> {localCharacter.status} </span> <span> - &nbsp;{localCharacter.species}</span>
       
            
          </h2>
          <div className="location">
          <span>Last known location:</span>
          <p>{localCharacter.location.name}</p>
        </div>

          <div>
             {
                 isAddToFavourites  ?  (    <span>It has already been added</span> ) : (
              <Button  style={{
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s ease"
              }} onClick={()=> onAddFavourites(localCharacter)}> Add To Favourites </Button>
            )
             }


          </div>
          
        </div>
      </div>
    ) : (
      <div>No character was selected</div>
    )
  )
}

export default CharacterSubList
