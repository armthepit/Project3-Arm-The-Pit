  import React from 'react';
  import { browserHistory } from 'react-router';
  import genre from '../../data/genres';
  import states from '../../data/states.js';
  import country from '../../data/countries';
  import map from 'lodash/map';
  import classnames from 'classnames';
  import validateInput from '../../../server/shared/validations/artistsignup';
  import draftjs from 'draft-js';
  //import  { editorState } from 'draft-js';
  import { Editor, } from 'react-draft-wysiwyg';
  import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
  import TextFieldGroup from '../common/TextFieldGroup';
  import {convertFromRaw, convertToRaw} from 'draft-js';

  class ArtistSignupForm extends React.Component {
    constructor(props) {
     super(props);
     this.state = {

       email: '',
       password: '',
       passwordConfirmation: '',
       name:'',
       hometown:'',
       country:'',
       state:'',
       genre: '',
       recordLabel:'',
       bio:'',
       bandMembers:'',
       artistWebsite:'',
       facebook:'',
       reverbnation:'',
       soundCloud:'',
       twitter:'',
       youtubeChannel:'',
       otherWebsite1:'',
       otherWebsite2:'',
       representative:'',
       repEmail:'',
       repPhone:'',
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
       this.props.isArtistExists(val).then(res => {
         let errors = this.state.errors;
         let invalid;
         if (res.data != null) {
           errors[field] = 'There is a a artist with that ' + field;
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
        this.props.artistSignupRequest(this.state).then(
          () => {
           this.props.addFlashMessage({
             type: 'success',
             text: 'Music Artist, you signed up successfully. Welcome to Arm The Pit!'
           });
            browserHistory.push('/');
          },
          ({ data }) => this.setState({ errors: data, isLoading: false })
       );
     }
   }

  //

    render() {
     const { errors } = this.state;
       const { editorContents } = this.state;
      const genreOptions = map(genre, (val, key) =>
        <option key={val} value={val}>{key}</option>
      );

       const stateOptions = map(states, (val, key) =>
       <option key={val} value={val}>{key}</option>
     );
     const countryOptions = map(country, (val, key) =>
       <option key={val} value={val}>{key}</option>
     );
      return (
        <form onSubmit={this.onSubmit}>
        <h1 className="text-center">Arm The Pit</h1>
        <h2 className="text-center">Artist Signup</h2>

          <div className="row">
            <div className="col-sm-4 col-md-6 col-md-offset-3">
              <TextFieldGroup
                 error={errors.text}
                 label="Artist Name"
                 onChange={this.onChange}
                 value={this.state.name}
                 field="name"
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
                 error={errors.text}
                 label="Hometown"
                 onChange={this.onChange}
                 value={this.state.hometown}
                 field="hometown"
               />
            </div>

            <div className="col-md-2 ">
              <div className={classnames("form-group", { 'has-error': errors.states })}>
                 <label className="control-label">State</label>
                 <select
                   className="form-control"
                  name="state"
                  onChange={this.onChange}
                  value={this.state.states}
                >
                   <option value="" disabled>Choose Your State</option>
                   {stateOptions}
                 </select>
                {errors.states && <span className="help-block">{errors.states}</span>}
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
            </div>
   

           <div className="row">
              <div className="col-md-2 col-md-offset-3">
               <div className={classnames("form-group", { 'has-error': errors.genre })}>
                  <label className="control-label">Genre</label>
                  <select
                    className="form-control"
                   name="genre"
                   onChange={this.onChange}
                   value={this.state.genre}
                 >
                    <option value="" disabled>Choose Your Genre</option>
                    {genreOptions}
                  </select>
                 {errors.genre && <span className="help-block">{errors.genre}</span>}
                </div>
              </div>

              <div className="col-md-4 ">
                <TextFieldGroup
                   error={errors.text}
                   label="Record Label"
                   onChange={this.onChange}
                   value={this.state.recordLabel}
                   field="recordLabel"
                 />
              </div>
            </div> 

          <div className="row">
          <div className="col-md-6 col-md-offset-3">  
           <TextFieldGroup
              error={errors.text}
              label="Band's Biography"
              onChange={this.onChange}
              value={this.state.bio}
              type = {<textarea></textarea>}
              field="bio"
            />
          </div>
          </div>  

          <div className="row">
          <div className="col-md-6 col-md-offset-3">  
          <TextFieldGroup
             error={errors.text}
             label="Band Members"
             onChange={this.onChange}
             value={this.state.bandMembers}
             type = {<textarea></textarea>}
             field="bandMembers"
           />
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


            <div className="row">
              <div className="col-md-3 col-md-offset-3">
                <TextFieldGroup
                   error={errors.text}
                   label="Your Website"
                   onChange={this.onChange}
                   value={this.state.artistWebsite}
                   field="artistWebsite"
                 />
              </div>

              <div className="col-md-3 ">
                <TextFieldGroup
                   error={errors.text}
                   label="Facebook"
                   onChange={this.onChange}
                   value={this.state.facebook}
                   field="facebook"
                 />
              </div>
            </div>  

            <div className="row">
              <div className="col-md-3 col-md-offset-3">
                <TextFieldGroup
                   error={errors.text}
                   label="ReverbNation"
                   onChange={this.onChange}
                   value={this.state.reverbnation}
                   field="reverbnation"
                 />
              </div>

              <div className="col-md-3 ">
                <TextFieldGroup
                   error={errors.text}
                   label="SoundCloud"
                   onChange={this.onChange}
                   value={this.state.soundCloud}
                   field="soundCloud"
                 />
              </div>
            </div>  

            <div className="row">
              <div className="col-md-3 col-md-offset-3">
                <TextFieldGroup
                   error={errors.text}
                   label="Twitter"
                   onChange={this.onChange}
                   value={this.state.twitter}
                   field="twitter"
                 />
              </div>

              <div className="col-md-3 ">
                <TextFieldGroup
                   error={errors.text}
                   label="YouTube Channel"
                   onChange={this.onChange}
                   value={this.state.youtubeChannel}
                   field="youtubeChannel"
                 />
              </div>
            </div>  

            <div className="row">    
              <div className="col-md-3 col-md-offset-3">
                <TextFieldGroup
                   error={errors.text}
                   label="Additional Website"
                   onChange={this.onChange}
                   value={this.state.otherWebsite1}
                   field="otherWebsite1"
                 />
              </div>

                <div className="col-md-3 ">
                  <TextFieldGroup
                     error={errors.text}
                     label="Additional Website"
                     onChange={this.onChange}
                     value={this.state.otherWebsite2}
                     field="otherWebsite2"
                   />
                </div>
              </div>  

              <div className="row">
                <div className="col-md-2 col-md-offset-3">
                  <TextFieldGroup
                     error={errors.text}
                     label="Representative"
                     onChange={this.onChange}
                     value={this.state.representative}
                     field="representative"
                   />
                </div>

                <div className="col-md-2 ">
                  <TextFieldGroup
                     error={errors.text}
                     label="Representative's Email"
                     onChange={this.onChange}
                     value={this.state.repEmail}
                     field="repEmail"
                   />
                </div>

                <div className="col-md-2 ">
                  <TextFieldGroup
                     error={errors.text}
                     label="Representative's Phone"
                     onChange={this.onChange}
                     value={this.state.repPhone}
                     field="repPhone"
                   />
                </div>
              </div>  



       

          <div className="form-group">
           <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-custom center-block">
              Sign up
            </button>
          </div>
       </form>
     );
   }
 }

 ArtistSignupForm.propTypes = {
   artistSignupRequest: React.PropTypes.func.isRequired,
   addFlashMessage: React.PropTypes.func.isRequired,
   isArtistExists: React.PropTypes.func.isRequired
 }

  ArtistSignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
 }

 export default ArtistSignupForm;
