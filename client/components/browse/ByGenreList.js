import React from 'react';
import GenreCard from './GenreCard';
 
 export default function ByGenreList({ genres }) {
 
   const genresList = (
     <div className="col-md-12">
        { genres.map(genre => <GenreCard genre={genre} key={genre._id} />)}
     </div>
   );
   return (
       genresList
   );
 }
 
 ByGenreList.propTypes = {
   genres: React.PropTypes.array.isRequired
 }