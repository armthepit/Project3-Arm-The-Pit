import React from 'react';
import ArtistLoginForm from './ArtistLoginForm';

class ArtistLoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <ArtistLoginForm />
        </div>
      </div>
    );
  }
}

export default ArtistLoginPage;