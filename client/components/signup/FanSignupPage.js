 import React from 'react';
 import FanSignupForm from './FanSignupForm';
 import { connect } from 'react-redux';
 import { fanSignupRequest, isFanExists } from '../../actions/fanSignupActions';
 import { addFlashMessage } from '../../actions/flashMessages.js';

  class FanSignupPage extends React.Component {
    render() {
      const { fanSignupRequest, addFlashMessage, isFanExists } = this.props;
      return (
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <FanSignupForm 
              isFanExists={isFanExists}
              fanSignupRequest={fanSignupRequest} 
              addFlashMessage={addFlashMessage} />
         </div>
       </div>
      );
    }
  }

 FanSignupPage.propTypes = {
   fanSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
   isFanExists: React.PropTypes.func.isRequired
 }


 export default connect(null, { fanSignupRequest, addFlashMessage, isFanExists })(FanSignupPage);