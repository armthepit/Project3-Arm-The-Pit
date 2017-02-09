import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/login';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
           <ul className="nav navbar-nav navbar-right">
             <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
           </ul>
    )

    const guestLinks = (
       <ul className="nav navbar-nav navbar-right">
         <li><Link to="/artistsignup">Artist Sign up</Link></li>
         <li><Link to="/artistlogin">Artist Login</Link></li>
         <li><Link to="/fansignup">Fan Sign up</Link></li>
         <li><Link to="/fanlogin">Fan Login</Link></li>
       </ul>
    )

   return (
     <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
       <div className="container-fluid">
         <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
           <Link to="/" className="navbar-brand">Arm The Pit</Link>
         </div>

         <div className="navbar-collapse collapse">
            { isAuthenticated ? userLinks : guestLinks }
         </div>
       </div>
     </nav>
   );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout }) (NavigationBar);
