import {createContext, useState} from 'react'

export const FormContext = createContext();

export const FormContextProvider = ({children}) => {

    const [name, setName] = useState('');
    const [ubication, setUbication] = useState('');

    const changeName = (name) => {
        setName(name);
    }

    const changeUbication= (ubication) => {
        setUbication(ubication);
    }
    
    return (
        <FormContext.Provider value={{ changeName, changeUbication, name, ubication }}>
            {children}
        </FormContext.Provider>
    )
}