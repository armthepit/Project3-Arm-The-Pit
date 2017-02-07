import React from 'react';
import { link } from 'react-router';

export default function StateCard({ usa }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">	
					<img src="assets/images/lilgirl.jpg" className="img-rounded" alt="{usa.title}" />				
					<div className="content">
						{usa.title}
					</div>
				</div>
			</div>
		</div>
	);
}

StateCard.propTypes = {
	usa: React.PropTypes.object.isRequired
}