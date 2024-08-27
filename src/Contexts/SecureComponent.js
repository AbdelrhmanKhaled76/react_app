import React, {  createContext } from 'react';
import { Navigate } from 'react-router-dom';

export const SecureContext = createContext();


const SecureComponent = ({children}) => {

    let id = localStorage.getItem('user');
    if(id === null){
        return <Navigate  to="/unothorized"/>
    }
    return (
        <SecureContext.Provider value={SecureContext}>
            {children}
        </SecureContext.Provider>
    );
}

export default SecureComponent;
