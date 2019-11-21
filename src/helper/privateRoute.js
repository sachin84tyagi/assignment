import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const data = localStorage.getItem('user');

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        data
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)