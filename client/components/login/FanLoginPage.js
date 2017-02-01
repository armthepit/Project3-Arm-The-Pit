import React from 'react';
import FanLoginForm from './FanLoginForm';

class FanLoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <FanLoginForm />
        </div>
      </div>
    );
  }
}

export default FanLoginPage;