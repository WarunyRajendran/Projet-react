import React from 'react';

const Home = () => {
    return (
        <>
            <h1>Accueil</h1>
            <div className="home-presentation">
                <p className="title-presentation">Pour ce projet react, j'ai décidé d'utiliser les deux APIs suivantes.</p>        
                <div className="les-apis">
                    <div className="presentation-api-countries">
                            <h2>REST Countries</h2>
                        <p>Cette api va retourner tous les drapeaux du monde. Elle ne necéssite pas de clé api. Il existe plusieurs urls pour filtrer nos requêtes.
                            Il est possible d'afficher les drapeaux en fonction de la langue, du continent, de la capital, etc. 
                            Dans ce projet, cette api est divisée en 3 parties. 
                        </p>
                        <ul>
                            <li>En première partie, la page "Countries" qui va afficher la liste de tous les drapeaux.</li>
                        </ul>
                        
                        <p>Dans les deux parties suivantes, l'url est filtrée en fonction de ce que l'on souhaite retourner.</p>
                        <ul>
                            <li>En deuxième partie, la page "Pays d'Amérique" va uniquement retourner les pays d'Amérique.</li>
                            <li>En troisième partie, la page "Pays selon la langue", va afficher les pays selon la langue choisit. Ici, l'anglais.</li>
                        </ul>
                        <button><a href="https://restcountries.eu/" target="blank">Documentation REST Countries</a></button>
                    </div>
                
                    <div className="presentation-api-news">
                            <h2>NewsAPI</h2>
                        <p>Cette api va afficher toutes les news du monde provenant de différentes sources. Celle-ci necéssite une clé api. 
                            Pour cela, il faut s'enregistrer pour ensuite accéder aux ressources. Cependant, le nombre de requête
                            est limité à 100 requêtes par jour. 
                            Il est possible de filtrer les requêtes. Nous pouvons retourner les news d'un sujet précis (ex: le bitcoin), 
                            les grands titres d'un pays, etc.
                            Dans ce projet, cette api est divisée en 3 parties.
                        </p>
                        <ul>
                            <li>En première partie, la page "News", qui va afficher la liste de toutes les news du monde 
                            provenant de toutes les sources.</li>
                        </ul>    
                        <p>Dans les deux parties suivantes, l'url est filtrée en fonction de ce que l'on souhaite retourner.</p>
                        <ul>
                            <li>En deuxième partie, la page "Grands titre aux USA", va afficher les meilleurs news des USA.</li>
                            <li>En troisème partie, la page "Business News" retourne les news de la catégorie business.</li>
                        </ul>
                        <button><a href="https://newsapi.org/" target="blank">Documentation NewsAPI</a></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;