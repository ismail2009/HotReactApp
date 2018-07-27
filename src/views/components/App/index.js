import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot,setConfig } from 'react-hot-loader';
import configureStore from '../../../configure-store';
import PageNotFound from '../PageNotFound';
import Home from '../Home';

const store = configureStore();
const Search = () => (<h1>Hi I'm doing search here</h1>);
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);
setConfig({ logLevel: 'debug' })
export default hot(module)(App);
