import React from 'react';
import states from '../../data/states';
import map from 'lodash/map';

class FanSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      usa: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.fanSignupRequest(this.state);
  }

  render() {
    const options = map(states, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Fan Sign Up</h1>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange = {this.onChange}
            value = {this.state.password}
            type = "password"
            name = "password"
            className = "form-control"
          />
        </div>

        <div className = "form-group">
          <label className = "control-label"> Password Confirmation</label>
          <input
            onChange = {this.onChange}
            value = {this.state.passwordConfirmation}
            type = "password"
            name = "passwordConfirmation"
            className = "form-control"
          />
        </div>

        <div className = "form-group">
          <label className = "control-label"> State </label>
          <select
            className = "form-control"
            name = "usa"
            onChange = {this.onChange}
            value = {this.state.usa}
          >
            <option value = "" disabled> Choose Your State </option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}


FanSignupForm.propTypes = {
  fanSignupRequest : React.PropTypes.func.isRequired
}

export default FanSignupForm;
