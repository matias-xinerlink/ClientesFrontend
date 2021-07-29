import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../auth/useAuth';

export const PublicRouter = (props) => {

    const { isLogged } = useAuth();

    if (isLogged()) return <Redirect to={'/inicio'} />

    return (
        <div>
            <Route {...props} />
        </div>
    )
}
