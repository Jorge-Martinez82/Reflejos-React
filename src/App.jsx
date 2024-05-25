import React, { useState, useEffect } from 'react';
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Login from "./assets/components/Login.jsx";
import Home from "./assets/components/Home.jsx";
import Athletes from "./assets/components/Athletes.jsx";
import About from "./assets/components/About.jsx";
import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer.jsx";
import Result from "./assets/components/Result.jsx";
import Logout from "./assets/components/Logout.jsx";
import NotFound from "./assets/components/NotFound.jsx";


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate(); // Hook para poder cambiar de ruta

    useEffect(() => {
        // Verificar si el usuario está logueado 
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setLoggedIn(isLoggedIn);
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Guardar el estado de inicio de sesión en el almacenamiento local
        navigate('/home', { replace: true }); // Redirige a /home
    };

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('isLoggedIn'); // Eliminar el estado de inicio de sesión del almacenamiento local al cerrar sesión
        localStorage.removeItem('email'); // Eliminar el email del almacenamiento local
    };

    return (
        <>
            {loggedIn && <Header />} {/* Mostrar la cabecera solo si el usuario está logueado */}
            <Routes>
                {!loggedIn && (
                    <>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="*" element={<Login onLogin={handleLogin} />} />
                    </>
                )}
                {loggedIn && (
                    <>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/athletes" element={<Athletes />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/result" element={<Result />} />
                        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                        <Route path="*" element={<NotFound />} />
                    </>
                )}
            </Routes>
            {loggedIn && <Footer />} {/* Mostrar el footer solo si el usuario está logueado */}
        </>
    );
}

export default App;
