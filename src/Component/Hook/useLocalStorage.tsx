import React, { useEffect, useState } from 'react'
import { useCharacterContext } from './CharacterContext'
import { ICharacter } from '../Type/Type'

function useLocalStorage(key,initialState) {

    const [value, setValue] = useState<ICharacter[]>(() => (
        localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialState
    ))

    useEffect(()=> {
        localStorage.setItem("FAVOURITES", JSON.stringify(value))

    },[value])



  return[value,setValue ]
}

export default useLocalStorage