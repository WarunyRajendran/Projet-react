import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region:capital;flag"
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
                    <li key={country.name}>{country.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Countries;


// https://www.superheroapi.com/api.php/10208691394679289/70/  api superhero