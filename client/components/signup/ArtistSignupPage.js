 import React from 'react';
 import ArtistSignupForm from './ArtistSignupForm';
 import { connect } from 'react-redux';
 import { artistSignupRequest, isArtistExists } from '../../actions/artistSignupActions'; 
 import { addFlashMessage } from '../../actions/flashMessages.js';

  class ArtistSignupPage extends React.Component {
    render() {
      const { artistSignupRequest, addFlashMessage, isArtistExists } = this.props;
      return (
       <div>

           <ArtistSignupForm
              isArtistExists={isArtistExists}
              artistSignupRequest={artistSignupRequest}
              addFlashMessage={addFlashMessage}/>

       </div>
      );
    }
  }
 
ArtistSignupPage.propTypes = {
   artistSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
   isArtistExists: React.PropTypes.func.isRequired
 }
 
 
 export default connect(null, { artistSignupRequest, addFlashMessage, isArtistExists })(ArtistSignupPage);