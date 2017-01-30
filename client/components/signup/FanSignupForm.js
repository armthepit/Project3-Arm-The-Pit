 import React from 'react';
  import states from '../../data/states';
  import map from 'lodash/map';
 import classnames from 'classnames';
  import validateInput from '../../../server/shared/validations/fansignup';
  import TextFieldGroup from '../common/TextFieldGroup';
  
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

    isValid() {
      const { errors, isValid } = validateInput(this.state);

      if (!isValid) {
        this.setState({ errors });
      }

      return isValid;
    }
    
    onSubmit(e) {
     e.preventDefault();
     
     if (this.isValid()) {
     this.setState({ errors: {}, isLoading: true });
     this.props.fanSignupRequest(this.state).then(
       () => {},
       ({ data }) => this.setState({ errors: data, isLoading: false })
     );
     }
    }
  
    render() {
     const { errors } = this.state;
      const options = map(states, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );
      return (
        <form onSubmit={this.onSubmit}>
          <h1>Fan Signup</h1>
  
 
        <TextFieldGroup
           error={errors.email}
           label="Email"
           onChange={this.onChange}
           value={this.state.email}
           field="email"
         />
  
        <TextFieldGroup
           error={errors.password}
           label="Password"
           onChange={this.onChange}
           value={this.state.password}
           field="password"
           type="password"
         />
  
        <TextFieldGroup
           error={errors.passwordConfirmation}
           label="Password Confirmation"
           onChange={this.onChange}
           value={this.state.passwordConfirmation}
           field="passwordConfirmation"
           type="password"
         />
  

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