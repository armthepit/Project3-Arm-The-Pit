 import React from 'react';
 import { browserHistory } from 'react-router';
  import states from '../../data/states';
  import country from '../../data/countries';
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
        hometown: "",
        usa: '',
        country: '',
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
      const stateOptions = map(states, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );
      const countryOptions = map(country, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );
      return (
        <form onSubmit={this.onSubmit}>
        <h1 className="text-center">Arm The Pit</h1>
        <h2 className="text-center">Fan Signup</h2>

          <div className="row">
            <div className="col-sm-4 col-md-6 col-md-offset-3">
                <TextFieldGroup
                   error={errors.username}
                   label="Name"
                   onChange={this.onChange}
                   value={this.state.username}
                   field="username"
                 />
            </div>
          </div>       

          <div className="row">
            <div className="col-md-2 col-md-offset-3">
                <TextFieldGroup
                   error={errors.email}
                   label="Email"
                   onChange={this.onChange}
                   checkExists={this.checkExists}
                   value={this.state.email}
                   field="email"
                 />
            </div>
            
            <div className="col-md-2 ">      
                <TextFieldGroup
                   error={errors.password}
                   label="Password"
                   onChange={this.onChange}
                   value={this.state.password}
                   field="password"
                   type="password"
                 />
            </div>
                 
          
            <div className="col-md-2 ">
                <TextFieldGroup
                   error={errors.passwordConfirmation}
                   label="Password Confirmation"
                   onChange={this.onChange}
                   value={this.state.passwordConfirmation}
                   field="passwordConfirmation"
                   type="password"
                 />
            </div>
          </div>

          <div className="row">  
            <div className="col-md-2 col-md-offset-3">
               <TextFieldGroup
                 error={errors.hometown}
                 label="City"
                 onChange={this.onChange}
                 value={this.state.hometown}
                 field="hometown"
               />
            </div>  


            <div className="col-md-2 "> 
                <div className={classnames("form-group", { 'has-error': errors.usa })}>
                  <label className="control-label">State</label>
                  <select
                    className="form-control"
                   name="usa"
                   onChange={this.onChange}
                   value={this.state.usa}
                 >
                    <option value="" disabled>Choose Your State</option>
                    {stateOptions}
                  </select>
                 {errors.usa && <span className="help-block">{errors.usa}</span>}
                </div>
            </div>    
         
          <div className="col-md-2 ">
            <div className={classnames("form-group", { 'has-error': errors.country })}>
              <label className="control-label">Country</label>
              <select
                className="form-control"
               name="country"
               onChange={this.onChange}
               value={this.state.country}
             >
                <option value="" disabled>Choose Your Country</option>
                {countryOptions}
              </select>
             {errors.country && <span className="help-block">{errors.country}</span>}
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 col-md-offset-3">  
             <div className="form-group">
              <label className="control-label">Add A Profile Pic</label>
              <input 
                type="file" 
                name="file" 
                ref="file" 
                />
              </div>
            </div>
          </div>
          
          <div className="form-group">
           <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-custom center-block">
              Sign up
            </button>
          </div>
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