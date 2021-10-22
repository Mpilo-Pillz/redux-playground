import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    isAuth: false,
    login: () => { } // this is just for autocompletion wont need this for typescript
});

export const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginHandler = () => {
        setIsAuthenticated(true);
    }
    return (
        <AuthContext.Provider
            value={{ login: loginHandler, isAuth: isAuthenticated }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

