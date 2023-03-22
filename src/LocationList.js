import axios from 'axios';
import { useState } from 'react';
import './App.css';

function LocationList() {

    const PATH = 'https://54.219.155.211:8080/api/v1/locations';

    const [locations, setLocations] = useState([]);

    const getLocations = (event) => {
        event.preventDefault();
        let locations = [];
        axios.get(PATH
        )
            .then(response => {
                console.log(response.data);
                locations = response.data;
                setLocations(locations);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (

        <div>
            <h1>Hello World</h1>
            <button onClick={getLocations}>Get Locations</button>
            {locations.map((loc, index) => (
                <li key={index}>{loc.name}, {loc.description}</li>
            ))}
        </div>
    );

}

export default LocationList;