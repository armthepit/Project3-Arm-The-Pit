import React from 'react';
import GenreCard from './GenreCard';
 
 export default function ByGenreList({ genres }) {
   const emptyMessage = (
     <p>No artists have signed up yet.</p>
   );
 
   const genresList = (
     <div className="col-md-12">
        { genres.map(genre => <GenreCard genre={genre} key={genre._id} />)}
     </div>
   );
 
   return (
     <div>
       {genres.length === 0 ? emptyMessage : genresList}
     </div>
   );
 }
 
 ByGenreList.propTypes = {
   genres: React.PropTypes.array.isRequired
 }