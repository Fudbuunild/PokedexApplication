// import {useEffect, useState} from 'react';
// import { Hook } from 'tapable';
// import PokemonThumnail from './components/PokemonThumnail';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokePage from './components/PokePage';
import Header from './components/Header';

function App() {

  return (
    <Router>
    <Header/>
    <div className="app-container">
        <Switch>
          <Route exact path="/PokedexApplication/" component={Home} />
          <Route exact path="/pokepage/:id" component={
            ({ match, location, history }) => {
              return <PokePage />
            }
          } />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
