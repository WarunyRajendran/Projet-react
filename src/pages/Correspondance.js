import React, { useEffect, useState } from 'react';
// import Countries from '../components/Countries';
// import News from '../components/News';
// import ListCountries from '../components/ListCountries';

const Correspondance = () => {
    let [data, setData] = useState([]);
    let [news, setNews] = useState([]);
    const [once, setOnce] = useState(true);
    let randomNumber = Math.floor(Math.random() * 100);
    // const { country } = props;
    // const { ListCountries } = props;
    // console.log(country);

    useEffect(() => {
        if(once) {
        fetch("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
        .then(res => res.json())
        .then((res) => setData(res[randomNumber]));
        // console.log(data);
        setOnce(false);
        }
    })


    // useEffect(() => {
    //     if(once) {
    //         fetch("https://newsapi.org/v2/sources?apiKey=c779b69affed4efe94a1e48ab6479c62")
    //         .then(res => res.json())
    //         // .then(res => console.log(res.sources));
    //         .then((res) => setNews(res.sources[randomNumber]));
    //         // console.log(news);
    //         setOnce(false);
    //     }
    // })

    return (
        <>
            <h1>Page Correspondance des deux APIs</h1>
            <ul>
                <p>Faire la Correspondance des Pays et des News</p>
            </ul>

            {/* <div key={news.name} className="correspondance-news">
                <li>Nom : {news.name}</li>
                <li>Description : {news.description}</li>
                <li>Pays :  {news.country}</li>
                <li>Site :  {news.url}</li>
            </div> */}

            <div className="correspondance-news">
                <li>Nom : Nom de la news</li>
                <li>Description : Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</li>
                <li>Pays :  France</li>
                <li>Site :  www.google.com</li>
            </div>


            <div key={data.name} className="correspondance-countries">
                <img src={data.flag} alt="flag" />
                <li>Pays : {data.name}</li>
                <li>Capital : {data.capital}</li>
                <li>Pop. {data.population}</li>
            </div>


            {/* <ul>
                {data.map((country) => (
                    <>
                    <div key={country.name} className="correspondance-news">
                        <img src={country.flag} alt="flag" />
                        <li>Pays : {country.name}</li>
                        <li>Capital : {country.capital}</li>
                        <li>Pop. {country.population}</li>
                    </div>
                   </>
                ))}
            </ul> */}
        </>
            // {/* <div className="data-countries-container">
            //     <ul>
            //         <img src={data.flag} alt="flag" />
            //         <li>Pays : {data.name}</li>
            //         <li>Capital : {data.capital}</li>
            //         <li>Pop. {data.population}</li>
            //     </ul>
            // </div> */}
    );
};

export default Correspondance;