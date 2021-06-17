import React from "react";
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import Correspondance from '../pages/Correspondance';

const ListCountries = (props) => {
    const { country } = props;
    // console.log(country);
    return (
        <>
            {/* <li className="listcountries" key={country.name}>{country.name}</li> */}
            {/* <li className="listCountries"> */}
            <div className="data-countries">
                {/* <ul> */}
                    <img src={country.flag} alt="flag" />
                    <p>{country.name}</p>
                    {/* <p>Capital : {country.capital}</p> */}
                    {/* <p>Pop. {country.population}</p> */}
                {/* </ul> */}
            </div>
            {/* </li> */}
            {/* <ul>
                {country.map((pays) => (
                    <Correspondance pays={pays} key={pays.name}/>
                    // <li key={country.name}>{country.name}</li>
                ))}
            </ul> */}
        </>
    )
};

export default ListCountries;