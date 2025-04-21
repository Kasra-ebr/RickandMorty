

import { useCharacterContext } from '../Hook/CharacterContext'

function Navbar({children}) {

  return (
    <div className="navbar">
      <span>LOGO</span>
      <Search/>
      <SearchRes/>
         {children}
    </div>
  )
}

export default Navbar



export function Search() {

  const { search, setSearch} = useCharacterContext();
  return (
    <div>
      <div>

        <input
        className='text-field '
          type="text"
          name="search"
          placeholder=" Search ... "
          value={search}
          onChange={(e)=>setSearch(e.target.value) } 
        />
      </div>
    </div>
  );
}


export function SearchRes() {
    const {favourites}= useCharacterContext()
  return (
<span style={{ color: '#94a3b8' }}>Found {favourites.length} Character</span>
  )
}

