import React from 'react';
import { link } from 'react-router';

export default function NameCard({ name }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">	
					<img src="assets/images/lilgirl.jpg" className="img-rounded" alt="{name.title}" />				
					<div className="content">
						{name.title}
					</div>
				</div>
			</div>
		</div>
	);
}

NameCard.propTypes = {
	name: React.PropTypes.object.isRequired
}