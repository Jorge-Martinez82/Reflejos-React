import React, { useState, useEffect } from 'react';
import '../../index.css';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Result from "./Result.jsx";
import app from '../firebaseConfig.js';


const db = getFirestore(app); // Inicializa la conexion con la BD

// Función para obtener atletas
async function getAthletes(db) {
    try {
        const athletesCol = collection(db, 'deportistas');
        const athletesSnapshot = await getDocs(athletesCol);
        const athletesList = athletesSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                data: doc.data()
            };
        });
        return athletesList;
    } catch (error) {
        console.error("NotFound al obtener atletas:", error);
        throw error; // Relanzamos el error para que sea manejado en useEffect
    }
}

const Athletes = () => {
    const [athletes, setAthletes] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para mostrar carga
    const [showResult, setShowResult] = useState(false);


    useEffect(() => {
        async function fetchData() {
            try {
                const athletesData = await getAthletes(db);
                setAthletes(athletesData);
            } catch (error) {
                console.error("NotFound al establecer los datos de los atletas:", error);
            } finally {
                setLoading(false); // Cambiamos el estado de carga independientemente del resultado
            }
        }

        fetchData();
    }, []);

    const toggleResult = (id) => {
        setAthletes(prevAthletes => {
            return prevAthletes.map(athlete => {
                if (athlete.id === id) {
                    return {
                        ...athlete,
                        showResult: !athlete.showResult
                    };
                }
                return athlete;
            });
        });
    };

    return (
        <div>
            <main>
                <section className="contAthleta">
                    <h3>Información de atletas</h3>
                    {loading ? (
                        <p>Cargando atletas...</p>
                    ) : (
                        <ul>
                            {athletes.map((athlete, index) => (

                                <li key={index}>
                                    <h4>{athlete.data.nombre} {athlete.apellido1} {athlete.apellido2}</h4>
                                    <p>Club: {athlete.data.club}</p>
                                    <p>Deporte: {athlete.data.deporte}</p>
                                    <button className='botAt' onClick={() => toggleResult(athlete.id)}>Resultados</button>
                                    {athlete.showResult && <Result id={athlete.id} />}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Athletes;