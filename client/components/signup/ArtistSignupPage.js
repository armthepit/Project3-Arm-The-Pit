 import React from 'react';
 import ArtistSignupForm from './ArtistSignupForm';
  
  class ArtistSignupPage extends React.Component {
    render() {
      return (
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <ArtistSignupForm />
         </div>
       </div>
      );
    }
  }
 
 export default ArtistSignupPage;