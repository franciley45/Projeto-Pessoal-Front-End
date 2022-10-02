import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './componets/Header';
import Favoritos from './componets/Favoritos';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Header } />
          <Route path="/componets/Favoritos" component={ Favoritos } />
        </Switch>
      </div>
    );
  }
}

export default App;
