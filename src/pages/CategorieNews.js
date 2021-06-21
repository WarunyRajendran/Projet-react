import React, { useEffect, useState } from 'react';
import BookNews from '../images/book.png';

const CategorieNews = () => {
    let [categorie, setCategorie] = useState([]);
    // const [once, setOnce] = useState(true);
    
    useEffect(() => {
        // if(once) {
        fetch("https://newsapi.org/v2/sources?category=business&apiKey=8fa89dcad1fb46118e537fcd03608ebf")
        .then(res => res.json())
        .then((res) => setCategorie(res.sources));
        // .then(res => console.log(res.sources));
        // setOnce(false);
        // }
    })

    return (
        <>
            <h1>Business news</h1>
            <div className="data-news-container">
                {categorie.map((categorie) => (
                <div className="news-headline" key={categorie.id}>
                    <h2>{categorie.name}</h2>
                    <div className="news-headline-details">
                        <p className="news-headline-description">{categorie.description}</p>
                        <p className="news-category">Categorie : {categorie.category}</p>
                        <a href={categorie.url} className="news-link" target="_blank" name="link"><img src={BookNews} name="link" className="news-url-image" alt="news-url"/></a>
                    </div>
                </div>
                ))}
            </div>
        </>
    );

};

export default CategorieNews;