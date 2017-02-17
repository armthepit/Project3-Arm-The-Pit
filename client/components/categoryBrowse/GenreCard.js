import React from 'react';
import { Link } from 'react-router';

export default function GenreCard({ genre }) {
	return (
		<div className="col-sm-12 col-md-3">
			<div className="panel panel-default">
				<div className="panel-body">
					<Link to={`genre/${genre.title}`}>
						<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{genre.title}" />	
					</Link>
				</div>			
				<div className="panel-footer text-center">
 					<Link to={`genre/${genre.title}`}><button type="button" className="btn btn-custom btn-block">{genre.title} - <span className="badge">{genre.numberArtists}</span></button></Link>
				</div>
			</div>
		</div>
	);
}

GenreCard.propTypes = {
	genre: React.PropTypes.object.isRequired
}
