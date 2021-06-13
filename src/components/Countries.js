import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCountries from './ListCountries';

const Countries = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        )
        // .then((res) => console.log(res.data))
        .then((res) => setData(res.data));
        console.log(data);
    });
    
    // for (var i = 0; i <= 30; i++) {
    //     useEffect(i)
    // }

    return (
        <>
            <h1>Page Pays</h1>
            <p>Affichage de tous les drapeaux</p>
            <p>Liste déroulante de chaque partie de l'api</p>
            <ul>
                {data.map((country) => (
                    <ListCountries country={country} key={country.name}/>
                    // <li key={country.name}>{country.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Countries;