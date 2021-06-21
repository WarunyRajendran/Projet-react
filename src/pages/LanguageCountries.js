import React, { useEffect, useState } from 'react';

const LanguageCountries = () => {
    let [language, setLanguage] = useState([]);
    const [once, setOnce] = useState(true);
    // let randomRegion = Math.floor(Math.random() * 5);
    
    useEffect(() => {
        // if(once) {
        fetch("https://restcountries.eu/rest/v2/lang/en")
        .then(res => res.json())
        .then((res) => setLanguage(res));
        // .then(res => console.log(res));
        // setOnce(false);
        // }
    })

    return (
        <>
            <h1>Pays selon la langue : EN</h1>
            <div className="data-countries-container">
                {language.map((language) => (
                    <div className="data-countries" key={language.name}>
                    <img src={language.flag} alt="flag" />
                    <p>{language.name}</p>
                    <p className="pays-capital">{language.capital}</p>
                    </div>
                ))}
            </div>
            
        </>
    );
};



export default LanguageCountries;