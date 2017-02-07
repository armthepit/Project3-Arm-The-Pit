 import React from 'react';
 import { Link } from 'react-router';
  
 class Greetings extends React.Component {
   render() {
     return (
       <div className="jumbotron">
         <h1>Welcome To Arm The Pit</h1>
         <Link to="/country"><button type="button" className="btn btn-info">Country</button></Link>
         <Link to="/genre"><button type="button" className="btn btn-info">Genre</button></Link> 
         <Link to="/name"><button type="button" className="btn btn-info">Name</button></Link> 
         <Link to="/state"><button type="button" className="btn btn-info">State</button></Link>        
       </div>
     );
   }
  }
 
 export default Greetings;