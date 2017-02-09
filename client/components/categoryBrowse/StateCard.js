import React from 'react';
import { Link } from 'react-router';

export default function StateCard({ usa }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">
					<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{usa.title}" />				
					<div className="content">
 						<Link to={`usa/${usa.title}`}>
							{usa.title}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

StateCard.propTypes = {
	usa: React.PropTypes.object.isRequired
}
