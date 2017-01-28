import React from 'react';
 import { Route, IndexRoute } from 'react-router';
 
 import App from './components/App';
 import Greetings from './components/Greetings';
 import ArtistSignupPage from './components/signup/ArtistSignupPage';
 import FanSignupPage from './components/signup/FanSignupPage';
 
 export default (
   <Route path="/" component={App}>
     <IndexRoute component={Greetings} />
     <Route path="artistsignup" component={ArtistSignupPage} />
     <Route path="fansignup" component={FanSignupPage} />
   </Route>
 )