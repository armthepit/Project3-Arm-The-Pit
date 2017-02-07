import React from 'react';
import { link } from 'react-router';

export default function NameCard({ letter }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">	
					<img src="assets/images/lilgirl.jpg" className="img-rounded" alt="{letter.title}" />				
					<div className="content">
						{letter.title}
					</div>
				</div>
			</div>
		</div>
	);
}

NameCard.propTypes = {
	letter: React.PropTypes.object.isRequired
}