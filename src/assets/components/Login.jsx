import React, { useState, useEffect  } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import {Navigate} from "react-router-dom";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para mantener el estado de inicio de sesión

    useEffect(() => {
        // Verificar el estado de inicio de sesión al cargar la página
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !validateEmail(email)) {
            setEmailError('Por favor, introduce un correo electrónico válido.');
            return;
        }
        if (!password || password.length < 8) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                localStorage.setItem('email', email);
                // Iniciar sesión ok
                onLogin();
            })
            .catch((error) => {
                // errores de inicio de sesión
                const errorMessage = error.message;
                console.log(errorMessage);
                setLoginError(errorMessage); 
            });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
        return re.test(email);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) {
            setPasswordError('');
        }
    };

    return (
        <div className="container">
            <section className="section">
                <h1 className="title">ReflejosApp</h1>
                <div>
                    <form className="form">
                        <div className='form-group'>
                            <label htmlFor="email-address" className="form-label">Correo electrónico</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                className="form-input"
                                onChange={handleEmailChange}
                            />
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                minLength="8"
                                placeholder="Password"
                                className="form-input"
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                        <div className='form-group'>
                            <button onClick={handleLogin} className="form-button">Iniciar sesión</button>
                        </div>
                        {loginError && <p className="error-message">{loginError}</p>} {/* Mostrar el mensaje de error de inicio de sesión */}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
