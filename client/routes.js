 import React from 'react';
 import { Route, IndexRoute, browserHistory } from 'react-router';
 
 import App from './components/App';
 import Greetings from './components/Greetings';
 import ArtistSignupPage from './components/signup/ArtistSignupPage';
 import ArtistLoginPage from './components/login/ArtistLoginPage';
 import FanSignupPage from './components/signup/FanSignupPage';
 import FanLoginPage from './components/login/FanLoginPage';
 import ByArtistPage from './components/browse/ByArtistPage';
 import ByCountryPage from './components/browse/ByCountryPage';
 import ByGenrePage from './components/browse/ByGenrePage';
 import ByNamePage from './components/browse/ByNamePage';
 import ByStatePage from './components/browse/ByStatePage';

 
 export default (
   <Route path="/" component={App}>
     <IndexRoute component={Greetings} />
     <Route path="artistsignup" component={ArtistSignupPage} />
     <Route path="artistlogin" component={ArtistLoginPage} />
     <Route path="fansignup" component={FanSignupPage} />
     <Route path="fanlogin" component={FanLoginPage} />
     <Route path="artist" component={ByArtistPage} />
     <Route path="country" component={ByCountryPage} />
     <Route path="genre" component={ByGenrePage} />
     <Route path="name" component={ByNamePage} />
     <Route path="state" component={ByStatePage} />
   </Route>
 )