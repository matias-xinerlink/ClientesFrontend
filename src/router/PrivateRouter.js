import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/useAuth';

export const PrivateRouter = ({ hasRole: role, ...props }) => {

    const location = useLocation();
    const { isLogged } = useAuth();

    if (!isLogged()) return <Redirect to={{ pathname: '/login', state: { from: location } }} />

    return (
        <div>
            <Route {...props} />
        </div>
    )
}
