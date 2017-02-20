import React from 'react';
import { Link } from 'react-router';

export default function NameCard({ name }) {
	return (
		<div className="col-sm-12 col-md-3">
			<div className="panel panel-default">
				<div className="panel-body text-center">
					<Link to={`name/${name.nameUrl}`}>
						<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{name.title}" />				
					</Link>
					<div className="panel-footer text-center">
 						<Link to={`name/${name.nameUrl}`}><button type="button" className="btn btn-custom btn-block">{name.title} - <span className="badge">{name.numberArtists}</span></button></Link>
					</div>
				</div>
			</div>
		</div>
	);
}

NameCard.propTypes = {
	name: React.PropTypes.object.isRequired
}
