 import React from 'react';
 import FanSignupForm from './FanSignupForm';
  
  class FanSignupPage extends React.Component {
    render() {
      return (
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <FanSignupForm />
         </div>
       </div>
      );
    }
  }
 
 export default FanSignupPage;