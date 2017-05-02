import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, IndexRoute, Route, browserHistory} from 'react-router'
import App from './components/app';
import Home from './components/home';
import Resources from './components/resources';
import reducers from './reducers';

import requireAuth from './components/require_auth'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path ='/' component={App}>
        <IndexRoute component={Home} />
        <Route path ='resources' component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
