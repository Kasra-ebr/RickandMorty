import React from "react";
import Button from "../Button/Button";
import { useCharacterContext } from "../Hook/CharacterContext";
import { IoCloseCircleOutline } from "react-icons/io5";
interface IModal {
  children: React.ReactNode;
}

function Modal({ children }: IModal) {
  const { isOpen, setIsOpen } = useCharacterContext();
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content"> 
        <div><span className="modal-title">List of Favourites</span>  
        </div>
        {children}
        <Button
         className="modal-close-button"
         
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
export default Modal;
