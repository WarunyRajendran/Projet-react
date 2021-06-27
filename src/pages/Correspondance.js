import React, { useEffect, useState } from 'react';
import World from '../images/world.png';
import ImageNews from '../images/news.png';
import BookNews from '../images/book.png';

const Correspondance = () => {
    let [countries, setCountries] = useState([]);
    let [news, setNews] = useState([]);
    let [data, setData] = useState([]);
    const [once, setOnce] = useState(true);
    let randomNumber = Math.floor(Math.random() * 100);
    let stringLanguage = data.toString();

    useEffect(() => {
        if(once) {
            fetch(`https://newsapi.org/v2/sources?apiKey=f057713f0efa4151a7a41b9b1af2022e`)
            .then(res => res.json())
            .then((res) => {
                setData(res.sources[randomNumber].language)
                setNews(res.sources[randomNumber])
            })
            setOnce(false);
        }
    })


    useEffect(() => {
        let stringLanguage = "en"
        if(once) {
        fetch(`https://restcountries.eu/rest/v2/lang/${stringLanguage}`)
        .then(res => res.json())
        .then((res) => {
            setCountries(res[randomNumber])
        })
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
                </div>

                

            </div>
        </>
    );
};

export default Correspondance;