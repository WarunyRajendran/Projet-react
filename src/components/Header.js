import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><a href="/accueil">Accueil</a></li>
                <li className="menu-deroulant">
                    <a href="/api-countries">Countries</a>
                    <ul className="sous-menu">
                        <li><a href="/region-countries">Pays d'Amérique</a></li>
                        <li><a href="/language-countries">Pays selon la langue</a></li>
                    </ul>
                </li>
                <li className="menu-deroulant">
                    <a href="/api-news">News</a>
                    <ul className="sous-menu">
                        <li><a href="/headline-news">Grands titres aux USA</a></li>
                        <li><a href="/categorie-news">Business News</a></li>
                    </ul>
                </li>
                <li><a href="/correspondance">Correspondance</a></li>
            </ul>
        </nav>
    );
};

export default Header;