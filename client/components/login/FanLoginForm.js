import React from 'react';
import { browserHistory } from 'react-router';
import validateInput from '../../../server/shared/validations/fanlogin';
import TextFieldGroup from '../common/TextFieldGroup';

class FanLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

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
        this.props.fanLogin(this.state).then(
          () => {
           this.props.addFlashMessage({
             type: 'success',
             text: 'Fan, you have logged in successfully.'
           });
           browserHistory.push('/');
          },
          ({ data }) => this.setState({ errors: data, isLoading: false })
       );
     }
   } 



  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Fan Login</h1>

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

       <div className="form-group"><button className="btn btn-danger btn-lg" disabled={this.state.isLoading}>Login</button></div>
      </form>
    );
  }
}

FanLoginForm.propTypes = {
  fanLogin: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
}

FanLoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default FanLoginForm;