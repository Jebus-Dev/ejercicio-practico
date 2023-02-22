import { useContext } from "react"
import { FormContext } from "../context/FormContext";


export const Result = () => {
    const {name, ubication} = useContext(FormContext);

    return (    
        <div className="result-container">
            
            <div className="name">
                <b>Nombre:</b>
                <div className="result">{name}</div>
            </div>

            <div className="ubication">
                <b>Ubicacion:</b>
                <div className="result">{ubication}</div>
            </div>
        </div>
    )
}