import React, { useEffect, useState } from "react";
import { getEpisodes } from "./Server/server";
import { useCharacterContext } from "./Hook/CharacterContext";
import { IEpisode } from "./Type/Type";
import Button from "./Button/Button";
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";
import { IoToggleSharp } from "react-icons/io5";

function EpisodeList() {
  const { episodes, setEpisodes, selectedId } = useCharacterContext();
  const [sortBy, setSortBy] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedId) return;
    getEpisodes(selectedId).then((res) => {
      console.log(res, "YOOOOO");
      setEpisodes(res);
    });
  }, [selectedId]);

  const sortedEpisodes: IEpisode[] = [...episodes].sort((a, b) => {
    const dateA: Date = new Date(a.created);
    const dateB: Date = new Date(b.created);
    return sortBy
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });

  return (
    <div>
      {episodes.length === 0 ? (
        <p>Loading episodes...</p>
      ) : (
        <div className="episode__container">
          <div className="episode__title">
            <h1>List of Episodes :</h1>
        <div>
        <Button className="btn-icon" onClick={() => setSortBy((prev) => !prev)}>
              <IoToggleSharp
               
                style={{
                  width: "30px",
                  height: "30px",
                  outline: "none",
                  border: "none",
                  transform: sortBy ? "rotate(360deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Button>
        </div>
          </div>

          <ul>
            {sortedEpisodes.map((item, index) => (
              <li key={item.id}>
                <span>
                  {String(index + 1).padStart(2, "0")} - {item.episode}: 
                </span>
                <strong>{item.name}</strong>    
                <span className="item__airDate badge">{item.air_date}</span>
              </li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
}

export default EpisodeList;
