import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import ListCountries from './ListCountries';
// import Correspondance from '../pages/Correspondance';

const Countries = () => {
    let [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
        .then(res => res.json())
        // .then(res => console.log(res));
        .then((res) => setData(res));
        // console.log(data);
    })

    // useEffect(() => {
    //     axios
    //     .get(
    //     "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
    //     )
    //     // .then((res) => console.log(res.data))
    //     .then((res) => setData(res.data));
    //     // console.log(data);
    // });
    
    // // for (var i = 0; i <= 30; i++) {
    // //     useEffect(i)
    // // }

    return (
        <>
            <h1>Les drapeaux</h1>
            <div className="data-countries-container">
                {data.map((country) => (
                    <ListCountries country={country} key={country.name}/>
                    // <li key={country.name}>{country.name}</li>
                ))}
            </div>
        </>
    );
};

export default Countries;