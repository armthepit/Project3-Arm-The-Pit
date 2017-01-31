 import React from 'react';
 import { browserHistory } from 'react-router';
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
       isLoading: false,
       invalid: false
      }
  
      this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.checkExists = this.checkExists.bind(this);
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

  checkExists(e) {
     const field = e.target.name;
     const val = e.target.value;
     if (val !== '') {
       this.props.isFanExists(val).then(res => {
         let errors = this.state.errors;
         let invalid;
         if (res.data != null) {
           errors[field] = 'There is a a fan with that ' + field;
           invalid = true;
         } else {
           errors[field] = '';
           invalid = false;
         }
         this.setState({ errors, invalid });
       });
     }
   }
 
    
   onSubmit(e) {
     e.preventDefault();
 
     if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.fanSignupRequest(this.state).then(
          () => {
           this.props.addFlashMessage({
             type: 'success',
             text: 'Music Fan, you signed up successfully. Welcome to Arm The Pit!'
           });
            browserHistory.push('/');
          },
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
           checkExists={this.checkExists}
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
           <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-danger btn-lg">
              Sign up
            </button>
          </div>
       </form>
     );
   }
 }
 
 FanSignupForm.propTypes = {
   fanSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
   isFanExists: React.PropTypes.func.isRequired
 }

  FanSignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
 }
 
 export default FanSignupForm;