import React from 'react';
import NameCard from './NameCard';
 
 export default function ByNameList({ names }) {
  
   const namesList = (
     <div className="row">
        { names.map(name => <NameCard name={name} key={name._id} />)}
     </div>
   );
   return (
      namesList
   );
 }
 
 ByNameList.propTypes = {
   names: React.PropTypes.array.isRequired
 }