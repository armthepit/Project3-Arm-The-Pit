 import React from 'react';
 import { Link } from 'react-router';

 class Greetings extends React.Component {
   render() {
     return (
       <div className="jumbotron">
         <h1>Welcome To Arm The Pit</h1>
         <div>
           <h2>Browse Artist By: </h2>
           <div className="row">
               <Link to="/browsecountry"><button type="button" className="btn btn-info col-lg-2 col-md-2 col-sm-2 col-lg-offset-4 col-md-offset-4 col-sm-offset-4">COUNTRY</button></Link>
               <Link to="/browsegenre"><button type="button" className="btn btn-info col-lg-2 col-md-2 col-sm-2">GENRE</button></Link>
               <Link to="/browsename"><button type="button" className="btn btn-info col-lg-2 col-md-2 col-sm-2">NAME</button></Link>
               <Link to="/browsestate"><button type="button" className="btn btn-info col-lg-2 col-md-2 col-sm-2">STATE</button></Link>
            </div>
          </div>
       </div>
     );
   }
  }

 export default Greetings;
