import React from 'react';
import Home from './pages/Home';
import Api from './pages/Api';

const showHome = () => {
  if (window.location.pathname === "/accueil") {
    return <Home></Home>
  }
};

const showApi = () => {
  if (window.location.pathname === "/api") {
    return <Api></Api>
  };
}

export default () => {
  return (
    <div className="ui container">
      {showHome()}
      {showApi()}
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
