import React from 'react';
import FanLoginForm from './FanLoginForm';
import { connect } from 'react-redux';
import { fanLogin } from '../../actions/login';
import { addFlashMessage } from '../../actions/flashMessages.js';

class FanLoginPage extends React.Component {
  render() {
  	const{ fanLogin, addFlashMessage } = this.props;	
    return (
      <div className="row">
        <div className="col-sm-4 col-md-6 col-md-offset-3">
          <FanLoginForm 
          	fanLogin = { fanLogin }
          	addFlashMessage={addFlashMessage}/>	
        </div>
      </div>
    );
  }
}

FanLoginPage.propTypes = {
   fanLogin: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
}

export default connect(null, { fanLogin, addFlashMessage })(FanLoginPage);