import React from 'react'
import CharacterSubList from './CharacterSubList'
import EpisodeList from './EpisodeList'

function CharacterDetails() {
  return (
    <div className='chracter__details'>
        <CharacterSubList/>
        <EpisodeList/>
    </div>
  )
}

export default CharacterDetails