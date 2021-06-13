import React from "react";

const ListNews = (props) => {
    const { news } = props;
    // console.log(props);
    return (
        // <h1>Hi</h1>
        // <li className="listcountries" key={country.name}>{country.name}</li>
        <li className="listNews">
            <div className="data-news-container">
                <ul>
                    <li>{news.id}</li>
                    <li>{news.name}</li>
                    <li>{news.description}</li>
                </ul>
            </div>
        </li>
    )
};

export default ListNews;