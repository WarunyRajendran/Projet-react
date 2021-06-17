import React from 'react';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <a href="/accueil" className="item">
                Accueil
            </a>
            <a href="/api-countries" className="item">
                Countries
            </a>
            <a href="/api-news" className="item">
                News
            </a>
            <a href="/correspondance" className="item">
                Correspondance
            </a>
        </div>
    );
};

export default Header;