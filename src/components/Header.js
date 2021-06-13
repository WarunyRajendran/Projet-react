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
            <a href="/fusion" className="item">
                Fusion
            </a>
        </div>
    );
};

export default Header;