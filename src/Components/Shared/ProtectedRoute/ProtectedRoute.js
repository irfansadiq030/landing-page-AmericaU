import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUser } from '../../../store/slices/user';

export default function ProtectedRoute({ children }) {

    let location = useLocation();
    const user = useSelector(getUser)

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;


}
