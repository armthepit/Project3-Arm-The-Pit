import React from 'react';
import ArtistLoginForm from './ArtistLoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/Artistlogin';
import { addFlashMessage } from '../../actions/flashMessages.js';

class ArtistLoginPage extends React.Component {
  render() {
  	const{ login, addFlashMessage } = this.props;	
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <ArtistLoginForm 
          	login = { login }
          	addFlashMessage={addFlashMessage}/>	
        </div>
      </div>
    );
  }
}

ArtistLoginPage.propTypes = {
   login: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { login, addFlashMessage })(ArtistLoginPage);