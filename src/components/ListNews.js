import React from "react";
import BookNews from '../images/book.png';

const ListNews = (props) => {
    const { news } = props;
    // console.log(props);
    return (
        <>
        <div className="data-news" key={news.name}>
            <h2>{news.name}</h2>
            <div className="data-news-details">
                <p className="news-description">{news.description}</p>
                <p className="news-country">Pays : {news.country}</p>
                <p className="news-site">{news.url}</p>
                <a href={news.url} className="news-link" target="_blank" name="link"><img src={BookNews} name="link" className="news-url-image" alt="news-url"/></a>
            </div>
        </div>
        </>
    )
};

export default ListNews;