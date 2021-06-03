// import {useEffect, useState} from 'react';
// import { Hook } from 'tapable';
// import PokemonThumnail from './components/PokemonThumnail';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch ,useRouteMatch } from 'react-router-dom';
import PokePage from './components/PokePage';
import Header from './components/Header';

function App() {
  let match = useRouteMatch();
    
  return (
    <Router>
    <Header/>
    <div className="app-container">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/" component={PokePage} />
          <Route path={`${match.path}/:id`}>
            <PokePage />
        </Route>
          {/* <Route exact path="/pokepage/:id" render={
            ({ match, location, history }) => {
              return <PokePage />
            }
          } /> */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
