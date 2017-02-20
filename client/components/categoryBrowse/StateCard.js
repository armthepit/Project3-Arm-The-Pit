import React from 'react';
import { Link } from 'react-router';

export default function StateCard({ usa }) {
	return (
		<div className="col-sm-12 col-md-3">
			<div className="panel panel-default">
				<div className="panel-body text-center">
					<Link to={`usa/${usa.stateUrl}`}>
						<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{usa.title}" />				
					</Link>
					<div className="panel-footer text-center">
 						<Link to={`usa/${usa.stateUrl}`}><button type="button" className="btn btn-custom btn-block">{usa.title} - <span className="badge">{usa.numberArtists}</span></button></Link>
					</div>
				</div>
			</div>
		</div>
	);
}

StateCard.propTypes = {
	usa: React.PropTypes.object.isRequired
}
