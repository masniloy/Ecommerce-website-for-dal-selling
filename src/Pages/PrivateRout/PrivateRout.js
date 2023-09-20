import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <h1>Loading....</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/Login"></Navigate>
};

export default PrivateRout;