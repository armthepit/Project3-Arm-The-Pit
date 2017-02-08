 import React from 'react';
 import { Link } from 'react-router';
  
 class Greetings extends React.Component {
   render() {
     return (
       <div className="jumbotron">
         <h1>Welcome To Arm The Pit</h1>
         <div>
           <h2>Browse Artist By: </h2>
           <Link to="/country"><button type="button" className="btn btn-info">COUNTRY</button></Link>
           <Link to="/genre"><button type="button" className="btn btn-info">GENRE</button></Link> 
           <Link to="/name"><button type="button" className="btn btn-info">NAME</button></Link> 
           <Link to="/state"><button type="button" className="btn btn-info">STATE</button></Link>   
        </div>     
       </div>
     );
   }
  }
 
 export default Greetings;