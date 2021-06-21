import React, { useEffect, useState } from 'react';

const RegionCountries = () => {
    let [region, setRegion] = useState([]);
    const [once, setOnce] = useState(true);
    // let randomRegion = Math.floor(Math.random() * 5);
    
    useEffect(() => {
        // if(once) {
        fetch("https://restcountries.eu/rest/v2/region/americas")
        .then(res => res.json())
        .then((res) => setRegion(res));
        // .then(res => console.log(res));
        // setOnce(false);
        // }
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
                    {/* <p>Pop. {country.population}</p> */}
                </div>
                ))}
            </div>
            
        </>
    );
};



export default RegionCountries;