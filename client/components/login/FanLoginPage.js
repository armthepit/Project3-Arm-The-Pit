import React from 'react';
import FanLoginForm from './FanLoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/Fanlogin';
import { addFlashMessage } from '../../actions/flashMessages.js';

class FanLoginPage extends React.Component {
  render() {
  	const{ login, addFlashMessage } = this.props;	
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <FanLoginForm 
          	login = { login }
          	addFlashMessage={addFlashMessage}/>	
        </div>
      </div>
    );
  }
}

FanLoginPage.propTypes = {
   login: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { login, addFlashMessage })(FanLoginPage);