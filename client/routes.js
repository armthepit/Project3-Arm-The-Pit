 import React from 'react';
 import { Route, IndexRoute, browserHistory } from 'react-router';
 
 import App from './components/App';
 import Greetings from './components/Greetings';
 import ArtistSignupPage from './components/signup/ArtistSignupPage';
 import ArtistLoginPage from './components/login/ArtistLoginPage';
 import FanSignupPage from './components/signup/FanSignupPage';
 import FanLoginPage from './components/login/FanLoginPage';
 import ArtistPage from './components/artist/ArtistPage';
 import Artist from './components/categoryBrowse/ByArtistPage';
 import ByCountryPage from './components/categoryBrowse/ByCountryPage'; 
 import ByGenrePage from './components/categoryBrowse/ByGenrePage';
 import ByNamePage from './components/categoryBrowse/ByNamePage';
 import ByStatePage from './components/categoryBrowse/ByStatePage';

 
 export default (
   <Route path="/" component={App}>
     <IndexRoute component={Greetings} />
     <Route path="artistsignup" component={ArtistSignupPage} />
     <Route path="artistlogin" component={ArtistLoginPage} />
     <Route path="fansignup" component={FanSignupPage} />
     <Route path="fanlogin" component={FanLoginPage} />
     <Route path="artist" component={Artist} />
     <Route path="browsecountry" component={ByCountryPage} />
     <Route path="browsegenre" component={ByGenrePage} />
     <Route path="browsename" component={ByNamePage} />
     <Route path="browsestate" component={ByStatePage} />
     <Route path=":browseId/:searchId" component={Artist} />
     <Route path="genre/:browseId" component={Artist} />
     <Route path="name/:browseId" component={Artist} />
     <Route path="usa/:browseId" component={Artist} />     
   </Route>
 )