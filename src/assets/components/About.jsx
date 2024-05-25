import React from 'react';
import firebaseLogo from '../../../public/firebaselogo.png';
import reactLogo from '../../../public/reactlogo.png';
import javascriptlogo from '../../../public/JavaScript-logo.png';

const About = () => {
    return (
        <div className="contAthleta">
            <div>
                <h4>Sobre nosotros:</h4>
                <p>Proyecto realizado por Pedro Velesco y Jorge Martinez para la asignatura Desarrollo Web Entorno
                    Cliente del ciclo Diseño de Aplicaciones Web.</p>
                <p>© Centro Integrado Politécnico Estella 2024</p>
                <h4>Tech stack</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={javascriptlogo} style={{width: '100px', height: 'auto'}} alt="jslogo"/>
                    <img src={reactLogo} style={{width: '100px', height: 'auto'}} alt="reactlogo"/>
                    <img src={firebaseLogo} style={{width: '200px', height: 'auto'}} alt="firebaselogo"/>
                </div>

            </div>
        </div>
    );
};

export default About;