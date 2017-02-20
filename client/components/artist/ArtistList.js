import React from 'react';
import ArtistDetail from './ArtistDetail';
 
 export default function ArtistList({ artist }) {
 
   const artistList = (
     <div className="col-md-12">
        { artist.map(artist => <ArtistDetail artist={artist} key={artist.artistUrl} />)}
     </div>
   );
   return (
       artistList
   );
 }
 
 ArtistList.propTypes = {
   artist: React.PropTypes.array.isRequired
 }