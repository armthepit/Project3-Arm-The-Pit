 import React from 'react';
  import states from '../../data/states';
  import map from 'lodash/map';
 import classnames from 'classnames';
  
  class FanSignupForm extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
       usa: '',
       errors: {},
       isLoading: false
      }
  
      this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }
 
   onChange(e) {
     this.setState({ [e.target.name]: e.target.value });
   }
  
    onSubmit(e) {
      e.preventDefault();
     this.setState({ errors: {}, isLoading: true });
     this.props.fanSignupRequest(this.state).then(
       () => {},
       ({ data }) => this.setState({ errors: data, isLoading: false })
     );
    }
  
    render() {
     const { errors } = this.state;
      const options = map(states, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );
      return (
        <form onSubmit={this.onSubmit}>
          <h1>Fan Signup</h1>
  
 
         <div className={classnames("form-group", { 'has-error': errors.email })}>
            <label className="control-label">Email</label>
            <input
              onChange={this.onChange}
             value={this.state.email}
             type="text"
              name="email"
              className="form-control"
            />
           {errors.email && <span className="help-block">{errors.email}</span>}
          </div>
  
         <div className={classnames("form-group", { 'has-error': errors.password })}>
            <label className="control-label">Password</label>
            <input
              onChange={this.onChange}
             value={this.state.password}
             type="password"
              name="password"
              className="form-control"
            />
           {errors.password && <span className="help-block">{errors.password}</span>}
          </div>
  
         <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
            <label className="control-label">Password Confirmation</label>
            <input
              onChange={this.onChange}
             value={this.state.passwordConfirmation}
             type="password"
              name="passwordConfirmation"
              className="form-control"
            />
           {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
          </div>
  

         <div className={classnames("form-group", { 'has-error': errors.usa })}>
            <label className="control-label">State</label>
            <select
              className="form-control"
             name="usa"
             onChange={this.onChange}
             value={this.state.usa}
           >
              <option value="" disabled>Choose Your State</option>
              {options}
            </select>
           {errors.usa && <span className="help-block">{errors.usa}</span>}
          </div>
  
          <div className="form-group">
           <button disabled={this.state.isLoading} className="btn btn-danger btn-lg">
              Sign up
            </button>
          </div>
       </form>
     );
   }
 }
 
 FanSignupForm.propTypes = {
   fanSignupRequest: React.PropTypes.func.isRequired
 }
 
 export default FanSignupForm;