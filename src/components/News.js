import React, { useEffect, useState } from 'react';
import ImageNews from '../images/news.png';
import FondNews from '../images/wallpapernews.png';
// import axios from 'axios';
import ListNews from './ListNews';

const News = () => {
    let [news, setNews] = useState([]);

    // useEffect(() => {
    //     fetch("https://newsapi.org/v2/sources?apiKey=c779b69affed4efe94a1e48ab6479c62")
    //     .then(res => res.json())
    //     // .then(res => console.log(res.sources));
    //     .then((res) => setNews(res.sources));
    //     // console.log(news);
    // })
    
    // useEffect(() => {
    //     axios
    //         .get(
    //         "https://newsapi.org/v2/sources?apiKey=f057713f0efa4151a7a41b9b1af2022e"
    //         )
    //         // .then((res) => console.log(res.data.sources));
    //         .then((res) => setNews(res.data.sources));
    //         console.log(news);
    //     });

    return (
        <>
            {/* <img src={FondNews} alt="news-fond"></img> */}
            <div className="news-h1-image">
                <h1>API</h1><img className="news-image" src={ImageNews} alt="news-image" />
            </div>
            <div className="data-news-container">
                {/* {news.map((news) => ( */}
                    {/* <ListNews news={news} key={news.id}/> */}
                    <ListNews />
                    {/* <li key={infonews.id}>{infonews.name}</li> */}
                {/* ))} */}
            </div>
        </>
    );
};

export default News;