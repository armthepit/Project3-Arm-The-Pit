import React from 'react';
import { link } from 'react-router';

export default function ArtistCard({ artist }) {
	return (
		 <div className="col-md-8 col-md-offset-2"> 
			<div className="panel panel-default">
				<div className="panel-body">
					<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{artist.title}" />
					<div className="content">
						<h4>{artist.name}</h4>
						<h5>Genre: {artist.genre}</h5>
						<h5>Hometown: {artist.hometown}, {artist.state}, {artist.country}</h5>
						<br />
						<h5>Band Members: {artist.bandMembers}</h5>
						<h5>Record Label: {artist.recordLabel}</h5>
						<br />
						<p>Bio:{artist.bio}</p>
						<h5>email: {artist.email}</h5>
						<h3>website: {artist.artistWebsite}</h3>
						<br />
						<h5>songs: {artist.songs}</h5>
						<h5>plays: {artist.plays}</h5>
						<h5>views: {artist.views}</h5>
						<br />
						<h4>Social Media</h4>
						<table className="table">
							<tbody>
						        <tr>
						            <td>facebook: {artist.facebook}</td>
						            <td>twitter: {artist.twitter}</td>
						        </tr>
						        <tr>
						           <td>youtube: {artist.youtubeChannel}</td>
						           <td>soundcloud: {artist.soundcloud}</td>
						        </tr>
						        <tr>
						        	<td>reverbnation {artist.reverbnation}</td>
						            <td>other website: {artist.otherWebsite1}</td>
						        </tr>	
						       </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

ArtistCard.propTypes = {
	artist: React.PropTypes.object.isRequired
}
