import React from "react";
import PropTypes from "prop-types";

import { Route, Navigate, Routes } from "react-router-dom";

const Test =({isAuthenticated, component: Component, ...props}) => (
    ( isAuthenticated )
        ? ( <Component { ...props } /> )
        : ( <Navigate to="/auth/login" /> )
)

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return (
    <Routes>

      <Route 
      exact 
      path="/" 
      element={<Test isAuthenticated={isAuthenticated} component={Component}/>}  

      { ...rest }/>
    </Routes>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
