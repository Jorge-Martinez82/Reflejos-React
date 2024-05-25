import React from 'react';
import polilogo from '../../../public/cropped-LogoPoliLargo.png';


const Home = () => {
    return (

        <div className="contAthleta">
            <div>
                <h1 className="welcome">Proyecto Reflejos</h1>
                <p>Somos parte de un proyecto colaborativo que involucra varios ciclos formativos, con el objetivo de desarrollar un producto deportivo innovador. Nuestro enfoque principal es mejorar los reflejos y la velocidad de reacción a través de dispositivos conectados por Bluetooth y controlados por una aplicación móvil.</p>
                <p>Desde aqui podrás acceder y visualizar los resultado de los atletas.</p>
                <img src={polilogo} alt="logo"/>
            </div>
        </div>
    );
};

export default Home;
