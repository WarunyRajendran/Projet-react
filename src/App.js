import React from 'react';
import Header from './components/Header';
import Route from './components/Route';
import Home from './pages/Home';
import Countries from './components/Countries';
import RegionCountries from './pages/RegionCountries';
import LanguageCountries from './pages/LanguageCountries';
import News from './components/News';
import Headline from './pages/HeadlineNews';
import CategorieNews from './pages/CategorieNews';
import Correspondance from './pages/Correspondance';

// const showHome = () => {
//   if (window.location.pathname === "/accueil") {
//     return <Home></Home>
//   }
// };

// const showPokemon = () => {
//   if (window.location.pathname === "/api") {
//     return <Api></Api>
//   };
// }

export default () => {
  return (
    <div className="ui container">
      <Header />
      <Route path="/accueil">
        <Home />
      </Route>
      <Route path="/api-countries">
        <Countries />
      </Route>
      <Route path="/region-countries">
        <RegionCountries />
      </Route>
      <Route path="/language-countries">
        <LanguageCountries />
      </Route>
      <Route path="/api-news">
        <News />
      </Route>
      <Route path="/headline-news">
        <Headline />
      </Route>
      <Route path="/categorie-news">
        <CategorieNews />
      </Route>
      <Route path="/correspondance">
        <Correspondance />
      </Route>
    </div>
  )
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Projet React Soutenance
      </header>
    </div>
  );
}

export default App;*/
