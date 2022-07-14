import { createContext, useEffect, useReducer } from "react";

import { userReducer } from '../reducers/userReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [userData, userDispatcher] = useReducer(userReducer,
        JSON.parse(sessionStorage.getItem('userData')) || {}    
    );

    useEffect(() => {
        sessionStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <UserContext.Provider value={{userData, userDispatcher}}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;