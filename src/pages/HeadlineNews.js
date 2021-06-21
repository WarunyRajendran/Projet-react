import React, { useEffect, useState } from 'react';
import BookNews from '../images/book.png';

const HeadlineNews = () => {
    let [headline, setHeadline] = useState([]);
    
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8fa89dcad1fb46118e537fcd03608ebf")
        .then(res => res.json())
        .then((res) => setHeadline(res.articles));
    })

    return (
        <>
        <h1>Grands titres aux USA</h1>
            <div className="data-news-container">
                {headline.map((headline) => (
                <div className="news-headline" key={headline.source.title}>
                    <h2>{headline.source.name}</h2>
                    <div className="news-headline-details">
                        <p className="news-headline-title">{headline.title}</p>
                        <p className="news-headline-description">{headline.description}</p>
                        <a href={headline.url} className="news-link" target="_blank" name="link"><img src={BookNews} name="link" className="news-url-image" alt="news-url"/></a>
                    </div>
                </div>
                ))}
            </div>
        </>
    );

};

export default HeadlineNews;