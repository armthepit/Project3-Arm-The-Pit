import React from 'react';
import classnames from 'classnames';
 
 const TextFieldGroup = ({ field, value, label, error, type, onChange, checkExists }) => {
   return (
     <div className={classnames('form-group', { 'has-error': error })}>
       <label className="control-label">{label}</label>
       <input
         onChange={onChange}
         onBlur={checkExists}
         value={value}
         type={type}
         name={field}
         className="form-control"
       />
     {error && <span className="help-block">{error}</span>}
     </div>  );
 }
 
 TextFieldGroup.propTypes = {
   field: React.PropTypes.string.isRequired,
   value: React.PropTypes.string.isRequired,
   label: React.PropTypes.string.isRequired,
   error: React.PropTypes.string,
   type: React.PropTypes.string.isRequired,
   onChange: React.PropTypes.func.isRequired,
   checkExists: React.PropTypes.func
 }
 
 TextFieldGroup.defaultProps = {
   type: 'text'
 }
 
 const TextFieldGroup1 = ({ field, value, label, error, type, onChange, checkExists }) => {
   return (
     <div className={classnames('form-group', { 'has-error': error })}>
       <label className="control-label">{label}</label>
       <input
         onChange={onChange}
         onBlur={checkExists}
         value={value}
         type={type}
         name={field}
         className="form-control"
       />
     {error && <span className="help-block">{error}</span>}
     </div>  );
 }

TextFieldGroup1.propTypes = {
   field: React.PropTypes.string.isRequired,
   value: React.PropTypes.string.isRequired,
   label: React.PropTypes.string.isRequired,
   error: React.PropTypes.string,
   type: React.PropTypes.string.isRequired,
   onChange: React.PropTypes.func.isRequired,
   checkExists: React.PropTypes.func
 }
 
 TextFieldGroup1.defaultProps = {
   type: 'text'
 }

 export default TextFieldGroup;
 export default TextFieldGroup1;
