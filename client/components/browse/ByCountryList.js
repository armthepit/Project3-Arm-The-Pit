import React from 'react';
import CountryCard from './CountryCard';
 
 export default function ByCountryList({ countries }) {
   const emptyMessage = (
     <p>No artists have signed up yet.</p>
   );
 
   const countriesList = (
     <div className="col-md-12">
        { countries.map(country => <CountryCard country={country} key={country._id} />)}
     </div>
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