import { createContext, useReducer, useEffect } from 'react';

import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();
const AuthContextProvider = (props) => {
    const [authData, authDispatcher] = useReducer(authReducer,
        JSON.parse(localStorage.getItem('authData')) || {
            username: '',
            email: '',
            password: ''
        });

    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(authData));
    }, [authData]);

    return (
        <AuthContext.Provider value={{authData, authDispatcher}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
