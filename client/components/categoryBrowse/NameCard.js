import React from 'react';
import { Link } from 'react-router';

export default function NameCard({ name }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">
					<img src="assets/images/lilgirl.jpg" className="img-rounded img-responsive center-block" alt="{name.title}" />				
					<div className="content">
 						<Link to={`name/${name.title}`}>
							{name.title}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

NameCard.propTypes = {
	name: React.PropTypes.object.isRequired
}
