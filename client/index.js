import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import draftjs from 'draft-js';
import reactdraftwysiwyg from 'react-draft-wysiwyg';
import rootReducer from './rootreducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/login';

import routes from './routes';

 const store = createStore(
   rootReducer,
   compose(
     applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
   )
  );

if (localStorage.jwtToken) {
   setAuthorizationToken(localStorage.jwtToken);
   store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
 }
 

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));