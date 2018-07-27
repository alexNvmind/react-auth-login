import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ to, permission, children }) => (
    permission ? children : (
        <Redirect to="/login" />
    )
)

export default ProtectedRoute;