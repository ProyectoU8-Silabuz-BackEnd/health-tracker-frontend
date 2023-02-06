import { useEffect, useState } from 'react';

const Medicamentos = () => {

    const [meds, setMeds] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMeds() {
            const options = {
                method: "get",
                headers: {
                "Content-Type": "application/json"
                }
            };
            try {
                const response = await fetch('https://health-tracker-backend-production.up.railway.app/api/v1/pastilla', options);
                const data = await response.json();
                // console.log(data);
                setMeds(data.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchMeds();
    }, []);

    return (
        <select className="recordatoryinput" id="select-field" name="select-field" required>
            {meds.map( item => (
                <option key={item.id}>{item.nombre}</option>
            ))}
        </select>
    )
}

export default Medicamentos;