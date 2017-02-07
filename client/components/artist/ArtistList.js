import React from 'react';
import ArtistCard from './ArtistCard';
 
 export default function ArtistList({ artists }) {

   const artistsList = (
     <div className="col-md-12">
        { artists.map(artist => <ArtistCard artist={artist} key={artist._id} />)}
     </div>
   );
   return (
      artistsList
   );
 }
 
 ArtistList.propTypes = {
   artists: React.PropTypes.array.isRequired
 }