import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Button from "../Button/Button";
import { FaTrash } from "react-icons/fa";

import Modal from "../Modal/Modal";
import { useCharacterContext } from "../Hook/CharacterContext";
import { Character } from "../CharacterList";


function Favourites() {
  const { isAddToFavourites, favourites, handleRemveFav, setIsOpen } =
    useCharacterContext();
  
  return (
    <div>
      <div >
        <Button onClick={() => setIsOpen(true)}>
          <i
            className={`fas fa-heart heart-icon ${
              isAddToFavourites ? "fav" : "none"
            }`}
          >
      
          </i>
        </Button>
      
      </div>
      <Modal>
        {favourites.length === 0 ? (
          <p>No favourites added yet.</p>
        ) : (
          favourites.map((char) => (
            <Character key={char.id} char={char}>
              <Button style={{   boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              
                transition: "background-color 0.3s ease"}} onClick={() => handleRemveFav(char.id)}>
              <FaTrash className="list_item__button" size={18} />
              </Button >
            </Character>
          ))
        )}
      </Modal>
    </div>
  );
}
export default Favourites;

