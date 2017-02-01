import React from 'react';
import { Link } from 'react-router';
 
 export default () => {
   return (
     <nav className="navbar navbar-default">
       <div className="container-fluid">
         <div className="navbar-header">
           <Link to="/" className="navbar-brand">Arm The Pit</Link>
         </div>
 
         <div className="collapse navbar-collapse">
           <ul className="nav navbar-nav navbar-right">
             <li><Link to="/artistsignup">Artist Sign up</Link></li>
             <li><Link to="/artistlogin">Artist Login</Link></li>
             <li><Link to="/fansignup">Fan Sign up</Link></li>
             <li><Link to="/fanlogin">Fan Login</Link></li>
           </ul>
         </div>
       </div>
     </nav>
   );
 }