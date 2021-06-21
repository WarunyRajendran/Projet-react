import React from "react";

const ListCountries = (props) => {
    const { country } = props;
    return (
        <>
            <div className="data-countries">
                <img src={country.flag} alt="flag" />
                <p>{country.name}</p>
                <p className="pays-capital">{country.capital}</p>
            </div>
        </>
    )
};

export default ListCountries;