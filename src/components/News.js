import React, { useEffect, useState } from 'react';
import ImageNews from '../images/news.png';
import ListNews from './ListNews';

const News = () => {
    let [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/sources?apiKey=8fa89dcad1fb46118e537fcd03608ebf")
        .then(res => res.json())
        // .then(res => console.log(res.sources));
        .then((res) => setNews(res.sources));
        // console.log(news);
    })

    return (
        <>
            <div className="news-h1-image">
                <img className="news-image" src={ImageNews} alt="news" />
            </div>
            <div className="data-news-container">
                {news.map((news) => (
                    <ListNews news={news} key={news.id}/>
                ))}
            </div>
        </>
    );
};

export default News;