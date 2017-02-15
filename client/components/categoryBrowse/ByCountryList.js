import React from 'react';
import CountryCard from './CountryCard';
 
 export default function ByCountryList({ countries }) {

   const countriesList = (
     <div className="row">
        { countries.map(country => <CountryCard country={country} key={country._id} />)}
     </div>
    );
    return (
      countriesList
    );  
 
 }
 
 ByCountryList.propTypes = {
   countries: React.PropTypes.array.isRequired
 }