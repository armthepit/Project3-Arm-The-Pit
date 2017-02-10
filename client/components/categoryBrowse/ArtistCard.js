import React from 'react';
import { link } from 'react-router';

export default function ArtistCard({ artist }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">
					<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{artist.title}" />				
					<div className="content">
						<h4>{artist.name}</h4> 
						<h7>member since: {artist.createdAt}</h7>
						<h5>Genre: {artist.genre}</h5> 
						<h5>Hometown: {artist.hometown}, {artist.state}, {artist.country}</h5>
						<br />
						<h5>Band Members: {artist.bandmembers}</h5>
						<h5>Record Label: {artist.recordLabel}</h5>
						<br />
						<p>Bio:{artist.bio}</p>
						<h5>email: {artist.email}</h5>
						<h3>website: {artist.artistWebsite}</h3>
						<br />
						<h5>Representative: {artist.representative}</h5>
						<h5>Rep email: {artist.repEmail}</h5>
						<h5>Rep phone: {artist.repPhone}</h5>
						<br />
						<h5>songs: {artist.songs}</h5>
						<h5>plays: {artist.plays}</h5>
						<h5>views: {artist.views}</h5>
						<br />
						<h4>Social Media</h4>
						<table class="table table-condensed">
							<tbody>
						        <tr>
						            <td>facebook: {artist.facebook}</td>
						            <td>twitter: {artist.twitter}</td>
						            <td>soundcloud: {artist.soundcloud}</td>
						        </tr>
						        <tr>
						        	<td>youtube: {artist.youtubeChannel}</td>
						            <td>reverbnation {artist.reverbnation}</td>
						            <td>other website: {artist.otherWebsite1}</td>
						        </tr>
						        <tr>
						            <td>other website: {artist.otherWebsite2}</td>
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
