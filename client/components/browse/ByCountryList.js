import React from 'react';
 
 export default function ByCountryList({ countries }) {
   const emptyMessage = (
     <p>No artists have signed up yet.</p>
   );
 
   const countriesList = (
     <p>countries list</p>
   );
 
   return (
     <div>
       {countries.length === 0 ? emptyMessage : countriesList}
     </div>
   );
 }
 
 ByCountryList.propTypes = {
   countries: React.PropTypes.array.isRequired
 }