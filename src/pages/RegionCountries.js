import React, { useEffect, useState } from 'react';

const RegionCountries = () => {
    let [region, setRegion] = useState([]);
    
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/region/americas`)
        .then(res => res.json())
        .then((res) => setRegion(res));
    })

    return (
        <>
            <h1>Pays d'Amérique</h1>
            <div className="data-countries-container">
                {region.map((region) => (
                    <div className="data-countries" key={region.name}>
                    <img src={region.flag} alt="flag" />
                    <p>{region.name}</p>
                    <p className="pays-capital">{region.capital}</p>
                </div>
                ))}
            </div>
            
        </>
    );
};



export default RegionCountries;