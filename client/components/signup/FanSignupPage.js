 import React from 'react';
 import FanSignupForm from './FanSignupForm';
 import { connect } from 'react-redux';
 import { fanSignupRequest } from '../../actions/fanSignupActions';
 import { addFlashMessage } from '../../actions/flashMessages.js';

  class FanSignupPage extends React.Component {
    render() {
      const { fanSignupRequest, addFlashMessage } = this.props;
      return (
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <FanSignupForm fanSignupRequest={fanSignupRequest} addFlashMessage={addFlashMessage} />
         </div>
       </div>
      );
    }
  }

 FanSignupPage.propTypes = {
   fanSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired
 }


 export default connect(null, { fanSignupRequest, addFlashMessage })(FanSignupPage);
