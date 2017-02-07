import React from 'react';
import ArtistCard from './ArtistCard';
 
 export default function ArtistList({ artists }) {
   const emptyMessage = (
     <p>No artists have signed up yet.</p>
   );
 
   const artistsList = (
     <div className="col-md-12">
        { artists.map(artist => <ArtistCard artist={artist} key={artist._id} />)}
     </div>
   );
 
   return (
     <div>
       {artists.length === 0 ? emptyMessage : artistsList}
     </div>
   );
 }
 
 ArtistList.propTypes = {
   artists: React.PropTypes.array.isRequired
 }