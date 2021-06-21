import React, { useEffect, useState } from 'react';
import World from '../images/world.png';
import ImageNews from '../images/news.png';
import BookNews from '../images/book.png';

const Correspondance = () => {
    let [countries, setCountries] = useState([]);
    let [news, setNews] = useState([]);
    // let [newslanguage, setNewsLanguage] = useState([]);
    // let [countrylanguage, setCountryLanguage] = useState([]);
    const [once, setOnce] = useState(true);
    let randomNumber = Math.floor(Math.random() * 100);
    // let stringNews = newslanguage.toString();
    // let stringLanguage = countrylanguage.toString();

    useEffect(() => {
        if(once) {
            fetch("https://newsapi.org/v2/sources?apiKey=8fa89dcad1fb46118e537fcd03608ebf")
            .then(res => res.json())
            .then((res) => {
                // setNewsLanguage(res.sources)
                setNews(res.sources[randomNumber])
            // .then((res) => console.log(res.sources[randomNumber].language))
                // console.log(stringLanguage)
            setOnce(false);
            },)
        }
    })


    useEffect(() => {
        if(once) {
        fetch('https://restcountries.eu/rest/v2')
        .then(res => res.json())
        .then((res) => {
            setCountries(res[randomNumber])
            // setCountryLanguage(res[randomNumber].alpha2Code)
            // console.log(res[randomNumber])
        })
        // .then(res => console.log('https://restcountries.eu/rest/v2/lang/' + stringNews))
        // .then((res) => setCountries(res));
        // .then(res => console.log(res.randomNumber.languages[0]));
        // .then(res => console.log(res[randomNumber]))
        // .then(res => console.log(CorrectFlag));
        setOnce(false);
        }
    })


    

    return (
        <>
            <div className="images-correspondance">
                <img src={ImageNews} className="news-correspondance" alt="news"/>
                <h1>Correspondance</h1>
                <img src={World} className="world-correspondance" alt="world"/>
            </div>

            

            <div className="container-correspondance">

                <div className="data-news-correspondance" key={news.name}>
                    <h2>{news.name}</h2>
                    <div className="data-news-details">
                        <p className="news-description">{news.description}</p>
                        <p className="news-country">Pays : {news.country}</p>
                        <p className="news-site">{news.url}</p>
                        <a href={news.url} className="news-link" target="_blank" name="link"><img src={BookNews} name="link" className="news-url-image" alt="news-url"/></a>
                    </div>
                </div>


                <div key={countries.name} className="correspondance-countries">
                    <img src={countries.flag} alt="flag" />
                    <p>Pays : {countries.name}</p>
                    <p>Capital : {countries.capital}</p>
                    <p>Pop. {countries.population}</p>
                    {/* <li>Langue : {countries.langagues[0]}</li> */}
                </div>

                

            </div>
        </>
    );
};

export default Correspondance;