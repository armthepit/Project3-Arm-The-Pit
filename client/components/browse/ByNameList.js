import React from 'react';
import NameCard from './NameCard';
 
 export default function ByNameList({ names }) {
   const emptyMessage = (
     <p>No artists have signed up yet.</p>
   );
 
   const namesList = (
     <div className="col-md-12">
        { names.map(letter => <NameCard letter={name} key={letter._id} />)}
     </div>
   );
 
   return (
     <div>
       {names.length === 0 ? emptyMessage : namesList}
     </div>
   );
 }
 
 ByNameList.propTypes = {
   names: React.PropTypes.array.isRequired
 }