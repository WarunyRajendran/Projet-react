import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListNews from './ListNews';

const News = () => {
    let [news, setNews] = useState([]);
    
    useEffect(() => {
        axios
            .get(
            "https://newsapi.org/v2/sources?apiKey=f057713f0efa4151a7a41b9b1af2022e"
            )
            // .then((res) => console.log(res.data.sources));
            .then((res) => setNews(res.data.sources));
            console.log(news);
        });

    return (
        <>
            <h1>Page News</h1>
            <p>Affichage de toutes les News</p>
            <p>Liste déroulante de chaque partie de l'api</p>
            <ul>
                {news.map((infonews) => (
                    <ListNews infonews={infonews} key={infonews.id}/>
                    // <li key={infonews.id}>{infonews.name}</li>
                ))}
            </ul>
        </>
    );
};

export default News;