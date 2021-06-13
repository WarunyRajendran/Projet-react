import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        // <>
        //     <h1>Page News</h1>
        //     <p>Affichage de toutes les News</p>
        //     <p>Liste déroulante de chaque partie de l'api</p>
        //     {/* //     <p>{news.country}</p> */}
        // </>
        <ul>
            {news.map((info) => (
                <li key={info.id}>{info.name}</li>
            ))}
        </ul>
    );
};

export default News;