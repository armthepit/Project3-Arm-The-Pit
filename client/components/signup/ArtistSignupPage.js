 import React from 'react';
 import ArtistSignupForm from './ArtistSignupForm';
 import { connect } from 'react-redux';
 import { artistSignupRequest } from '../../actions/artistSignupActions'; 

  class ArtistSignupPage extends React.Component {
    render() {
      const { artistSignupRequest } = this.props;
      return (
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <ArtistSignupForm artistSignupRequest={artistSignupRequest} />
         </div>
       </div>
      );
    }
  }
 
ArtistSignupPage.propTypes = {
   artistSignupRequest: React.PropTypes.func.isRequired
 }
 
 
 export default connect(null, { artistSignupRequest })(ArtistSignupPage);