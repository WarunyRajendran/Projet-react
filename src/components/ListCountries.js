import React from "react";

const ListCountries = (props) => {
    const { country } = props;
    // console.log(props);
    return (
        // <h1>Hi</h1>
        // <li className="listcountries" key={country.name}>{country.name}</li>
        <li className="listCountries">
            <div className="data-countries-container">
                <ul>
                    <img src={country.flag} alt="flag" />
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>{country.population}</li>
                </ul>
            </div>
        </li>
    )
};

export default ListCountries;