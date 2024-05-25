import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import app from '../firebaseConfig.js';


const db = getFirestore(app); // Inicializa la conexion con la BD

async function getResults(db) {
    try {
        const resultsCol = collection(db, 'resultados');
        const resultsSnapshot = await getDocs(resultsCol);
        const resultsList = resultsSnapshot.docs.map(doc => doc.data());
        return resultsList;
    } catch (error) {
        console.error("NotFound al obtener resultados:", error);
        throw error;
    }
}


const Result = (props) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const resultsData = await getResults(db);
                setResults(resultsData);
                setLoading(false);
            } catch (error) {
                console.error("NotFound al establecer los datos de los atletas:", error);
            }
        }
        fetchData();
    }, []);

    const result = results.find(result => result.iddeportista.id === props.id);


    if (loading) {
        return <p>Cargando resultados...</p>;
    }

    if (!result) {
        return <p>No se encontraron resultados para el ID especificado.</p>;
    }

    return (
        <div>
            <section className="contAthleta">
                <h3>Resultados</h3>
                <ul>
                    <li>
                        <p>distancia al dispositivo: {result.distanciaaldispositivo}</p>
                        <p>media tiempo reaccion: {result.mediatiemporeaccion}</p>
                        <p>numero dispositivos apagados: {result.numerodispositivosapagados}</p>
                        <p>numero fallos: {result.numerofallos}</p>
                        <p>tiempo total ejercicio: {result.tiempototalejercicio}</p>
                        <p>tiempo total empleado: {result.tiempototalempleado}</p>
                        <p>id programa: {result.idprograma.id}</p>
                        <p>tipo de ejercicio: {result.tipoejercicio.id}</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Result;
