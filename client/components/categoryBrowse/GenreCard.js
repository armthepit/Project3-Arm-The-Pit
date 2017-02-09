import React from 'react';
import { Link } from 'react-router';

export default function GenreCard({ genre }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">
					<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{genre.title}" />				
					<div className="content">
 						<Link to={`genre/${genre.title}`}>
							{genre.title}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

GenreCard.propTypes = {
	genre: React.PropTypes.object.isRequired
}
