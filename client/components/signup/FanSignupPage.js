 import React from 'react';
 import FanSignupForm from './FanSignupForm';
 import { connect } from 'react-redux';
 import { fanSignupRequest } from '../../actions/fanSignupActions';
  
  class FanSignupPage extends React.Component {
    render() {
      const { fanSignupRequest } = this.props;
      return (
       <div className="row">
         <div className="col-md-4 col-md-offset-4">
           <FanSignupForm FanSignupRequest={fanSignupRequest} />
         </div>
       </div>
      );
    }
  }
 
 FanSignupPage.propTypes = {
   fanSignupRequest: React.PropTypes.func.isRequired
 }
 
 
 export default connect(null, { fanSignupRequest })(FanSignupPage);