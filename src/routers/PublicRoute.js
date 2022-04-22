import React from 'react';
import PropTypes from 'prop-types';

import { Route, Navigate, Routes } from 'react-router-dom';

const Test = ({ isAuthenticated, component: Component, ...props }) => {
    return (
        (isAuthenticated)
            ? (<Navigate to="/" />)
            : (<Component {...props} />)
    )
}

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Routes>
            <Route
                path="/*"
                element={<Test isAuthenticated={isAuthenticated} component={Component} />}
                {...rest}
            />
        </Routes>
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
