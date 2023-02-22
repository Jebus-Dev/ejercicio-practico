import { useContext } from "react";
import {  FormContext } from "../context/FormContext";

export const Inputs = () => {

    const { changeName, changeUbication } = useContext(FormContext);
    
    const handleChangeName = (e) => {
        changeName((e.target.value));
    }

    const handleChangeUbication = (e) => {
        changeUbication((e.target.value))
    }

    return (
        <div className="input-container">
            <input type="text" onChange={handleChangeName} className="input" name="name" id="" placeholder="Nombre"/>
            <input type="text" onChange={handleChangeUbication} className="input" name="ubication" id="" placeholder="Ubicacion" />
        </div>
    )
}
