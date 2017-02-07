import React from 'react';
import StateCard from './StateCard';
 
 export default function ByStateList({ states }) {
   const emptyMessage = (
     <p>No artists have signed up yet.</p>
   );
 
   const statesList = (
     <div className="col-md-12">
        { states.map(usa => <StateCard usa={usa} key={usa._id} />)}
     </div>
   );
 
   return (
     <div>
       {states.length === 0 ? emptyMessage : statesList}
     </div>
   );
 }
 
 ByStateList.propTypes = {
   states: React.PropTypes.array.isRequired
 }