import { StyledModal } from "./style.js"
import { useState, useEffect } from "react";
import "./style.js";

const Modal = ({ setText, text, setUsername }) => {
const handleForm = (e) => {
    e.preventDefault()
    setUsername(text)
}
  return (
    <StyledModal >
      <form  onSubmit={handleForm} className="form__login__box">
        <label className=" label__login">Insira seu nome:</label>
        <input className="input__login" onChange={(e) =>  setText(e.target.value)} type="text" placeholder="" />
        <button   className="btn__login" type="submit">Enviar</button>
      </form>
    </StyledModal>
    
  );
};
export default Modal;
