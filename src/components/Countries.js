import React, { useEffect, useState } from 'react';
import ListCountries from './ListCountries';

const Countries = () => {
    let [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2`)
        .then(res => res.json())
        .then((res) => setCountries(res));
    })

    return (
        <>
            <h1>Les drapeaux</h1>
            <div className="data-countries-container">
                {countries.map((country) => (
                    <ListCountries country={country} key={country.name}/>
                ))}
            </div>
        </>
    );
};

export default Countries;