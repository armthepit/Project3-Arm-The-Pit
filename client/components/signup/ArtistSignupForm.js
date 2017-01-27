import React from 'react';
 import genres from '../../data/genres';
 import map from 'lodash/map';
 
 class ArtistSignupForm extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: '',
       passwordConfirmation: '',
       genre: ''
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
   }
 
   render() {
     const options = map(genres, (val, key) =>
       <option key={val} value={val}>{key}</option>
     );
     return (
       <form onSubmit={this.onSubmit}>
         <h1>Artist Sign Up</h1>
 
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
             onChange={this.onChange}
             value={this.state.password}
             type="password"
             name="password"
             className="form-control"
           />
         </div>
 
         <div className="form-group">
           <label className="control-label">Password Confirmation</label>
           <input
             onChange={this.onChange}
             value={this.state.passwordConfirmation}
             type="password"
             name="passwordConfirmation"
             className="form-control"
           />
         </div>
 
         <div className="form-group">
           <label className="control-label">Genre</label>
           <select
             className="form-control"
             name="genre"
             onChange={this.onChange}
             value={this.state.genre}
           >
             <option value="" disabled>Choose Your Genre</option>
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
 
 export default ArtistSignupForm;