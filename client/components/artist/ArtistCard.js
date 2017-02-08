import React from 'react';
import { link } from 'react-router';

export default function ArtistCard({ artist }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">	
					<img src="assets/images/lilgirl.jpg" className="img-rounded" alt="{artist.name}" />				
					<div className="content">
						{artist.name}
					</div>
				</div>
			</div>
		</div>
	);
}

ArtistCard.propTypes = {
	artist: React.PropTypes.object.isRequired
}