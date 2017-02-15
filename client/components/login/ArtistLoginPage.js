import React from 'react';
import ArtistLoginForm from './ArtistLoginForm';
import { connect } from 'react-redux';
import { artistLogin } from '../../actions/login';
import { addFlashMessage } from '../../actions/flashMessages.js';

class ArtistLoginPage extends React.Component {
  render() {
  	const{ artistLogin, addFlashMessage } = this.props;	
    return (
      <div className="row">
        <div className="col-sm-4 col-md-6 col-md-offset-3">
          <ArtistLoginForm 
          	artistLogin = { artistLogin }
          	addFlashMessage={addFlashMessage}/>	
        </div>
      </div>
    );
  }
}

ArtistLoginPage.propTypes = {
   artistLogin: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { artistLogin, addFlashMessage })(ArtistLoginPage);