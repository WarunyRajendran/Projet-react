import React from "react";
import BookNews from '../images/book.png';

const ListNews = (props) => {
    const { news } = props;
    // console.log(props);
    return (
        
        // <h1>Hi</h1>
        // <li className="listcountries" key={country.name}>{country.name}</li>
        // <li className="listNews">
            // <div className="data-news">
            //     {/* <ul className="list-news"> */}
            //         <p>Nom : {news.name}</p>
            //         <p>Description : {news.description}</p>
            //         <p>Pays : {news.country}</p>
            //         <p>Langue : {news.language}</p>
            //         <p>Site : {news.url}</p>
            //     {/* </ul> */}
            // </div>
        // </li>
        <>
        <div className="data-news" key={news.name}>
            <h2>{news.name}</h2>
            <div className="data-news-details">
                <p className="news-description">{news.description}</p>
                <p className="news-country">Pays : {news.country}</p>
                <p className="news-site">{news.url}</p>
                {/* <label name="link">Voir le site</label> */}
                <a href={news.url} className="news-link" target="_blank" name="link"><img src={BookNews} name="link" className="news-url-image" alt="news-url"/></a>
            </div>

            {/* <div className="news-title"> */}
                
            {/* </div> */}
        </div>


        {/* <div className="data-news">
            <div className="data-news-details">
                <p className="news-description">Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</p>
                <p className="news-country">France</p>
                <p className="news-site">www.google.com</p>
            </div>
            <h2>Nom de la News</h2>
        </div>


        <div className="data-news">
            <div className="data-news-details">
                <p className="news-description">Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</p>
                <p className="news-country">France</p>
                <p className="news-site">www.google.com</p>
            </div>
            <h2>Nom de la News</h2>
        </div>

        <div className="data-news">
            <div className="data-news-details">
                <p className="news-description">Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</p>
                <p className="news-country">France</p>
                <p className="news-site">www.google.com</p>
            </div>
            <h2>Nom de la News</h2>
        </div> */}
        </>
    )
};

export default ListNews;