import React from "react";

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
        <div className="data-news">
            <div className="data-news-details">
                <p className="description-news">Description : Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</p>
                <p>Pays :  France</p>
                <p>Site :  www.google.com</p>
            </div>
            <h2>Nom de la News</h2>
        </div>


        <div className="data-news">
            <h2>Nom de la News</h2>
            <div className="data-news-details">
                <p className="description-news">Description : Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</p>
                <p>Pays :  France</p>
                <p>Site :  www.google.com</p>
            </div>
        </div>


        <div className="data-news">
            <h2>Nom de la News</h2>
            <div className="data-news-details">
                <p className="description-news">Description : Mauris consectetur 
                    est vitae massa venenatis faucibus. 
                    Praesent congue pulvinar felis in blandit. 
                    Integer felis lectus, accumsan sed orci quis, 
                    gravida tincidunt ante. Quisque mattis lacus et 
                    ligula gravida, ut venenatis tortor consequat. 
                    Fusce finibus lobortis sem eget mattis. 
                    Suspendisse a nulla ante. Vestibulum nec 
                    placerat velit</p>
                <p>Pays :  France</p>
                <p>Site :  www.google.com</p>
            </div>
        </div>
        </>
    )
};

export default ListNews;