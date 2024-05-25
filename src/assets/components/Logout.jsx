import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    useEffect(() => {
        // Realizar logout al cargar la página
        onLogout(); // Llamar a la función de logout proporcionada por el padre
    }, [onLogout]);

    // Redirigir al usuario a la página de login después del logout
    return <Navigate to="/login" replace />;
};

export default Logout;
