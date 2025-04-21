import { createContext, useContext, useState } from "react";
import { ICharacter, IEpisode } from "../Type/Type";
import useLocalStorage from "./useLocalStorage";
interface IProvider {
    children: React.ReactNode;
}
interface IContext {
    characters: ICharacter[],
    setCharacters:React.Dispatch<React.SetStateAction<ICharacter[]>>,
    episodes:  IEpisode[],
    setEpisodes:React.Dispatch<React.SetStateAction<IEpisode[]>>, 
    selectedId:string | null,
    setSelectedId:React.Dispatch<React.SetStateAction<string | null>>,
    onAddFavourites:(id:string)=>void,
    setFavourites:React.Dispatch<React.SetStateAction<ICharacter[]>>,
    favourites:ICharacter[],
    isAddToFavourites:()=> boolean,
    handleRemveFav: (id :string) => void,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    searchHandler: () => void,
    filteredItems:ICharacter[],
    setFilteredItems: React.Dispatch<React.SetStateAction<ICharacter[]>>
} 

const CharacterContext = createContext({} as IContext);

export const useCharacterContext = () => {
    return useContext(CharacterContext);
};



export function CharacterContextProvider({ children }:IProvider) {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [selectedId, setSelectedId] = useState(null)
    const [episodes, setEpisodes] = useState<ICharacter[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<ICharacter>([])
    const [favourites,setFavourites ] = useLocalStorage("FAVOURITES", [])

    
    const searchHandler = () => {
        const filtered = characters.filter((char)=> (
            char.name.toLowerCase().includes(search.toLowerCase())
        ))
        setFilteredItems(filtered)

    }
    const onAddFavourites = (char: ICharacter) => {
        setFavourites((prevFav)=> [...prevFav,char])
        console.log(favourites,"fav")
    }
    const handleCharacter = (id: string) => {
        setSelectedId(id)
    }

    const handleRemveFav = (id : string) => {
        setFavourites((prevFav) => prevFav.filter((fav)=> fav.id !== id ))
    }

    const isAddToFavourites = favourites?.map((fav)=> fav.id).includes(selectedId)
    return (
        <CharacterContext.Provider value={{ characters,search,setSearch, setCharacters,searchHandler,filteredItems, selectedId,handleCharacter,episodes,isOpen, setIsOpen,  setEpisodes,onAddFavourites,favourites,setFavourites,isAddToFavourites,handleRemveFav}}>
            {children}
        </CharacterContext.Provider>
    );
}

/* .includes() → ✅ returns a boolean

.find() → 🧍‍♂️ returns a single object or undefined

.filter() → 👥 returns an array of objects 


  const searchHandler = () => {
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
  };
*/

