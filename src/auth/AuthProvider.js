import React, { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { config } from '../config/env';
import { LoadingPage } from '../pages/LoadingPage';

export const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [logginIn, setLogginIn] = useState(true);
    const [user, setUser] = useState(null);

    // Consulto si existe o no un localstorage con el JWT
    useEffect(() => {
        if (!!localStorage.getItem('sessionToken')) {
            // Si hay JWT chequeo su veracidad y añado el usuario
            fetch(`${config.apiUrl}/auth/checkuser`, { method: 'GET', headers: { "x-access-token": localStorage.getItem('sessionToken') } })
                .then(response => response.json())
                .then(result => {
                    if (result.message) return localStorage.removeItem('sessionToken');
                    setUser(result);
                    setLogginIn(false);
                })
                .catch(error => console.log('[Error]', error));

        }
        else {
            setLogginIn(false);
        }
    }, [])



    const history = useHistory()

    const login = (userCredentials, fromLocation, setError, setChecking) => {

        fetch(`${config.apiUrl}/auth/signin`, { method: 'POST', headers: { "Content-Type": "application/json" }, body: userCredentials })
            .then(response => response.json())
            .then(result => {
                setChecking(false);
                if (!!result.message) {
                    setError(result.message)
                }
                else {
                    setError(null)
                    localStorage.setItem('sessionToken', result.accessToken);
                    setUser(result);
                    if (fromLocation) {
                        history.push(fromLocation);
                    }
                }
            })
            .catch(error => {
                setError('Hay un error en la conexión a la Base de Datos.')
                console.log('[Error]', error)
                setChecking(false);
            });

    }

    const logout = () => {
        localStorage.removeItem('sessionToken');
        setUser(null);
    }

    const isLogged = () => !!user;

    const contextValue = {
        user,
        isLogged,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {
                logginIn ? <LoadingPage /> : props.children
            }
        </AuthContext.Provider>
    )
}
