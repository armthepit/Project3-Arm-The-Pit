import React from 'react';
import { link } from 'react-router';

export default function CountryCard({ country }) {
	return (
		<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-body">	
					<img src="assets/images/lilgirl.jpg" className="img-rounded" alt="{country.title}" />				
					<div className="content">
						{country.title}
					</div>
				</div>
			</div>
		</div>
	);
}

CountryCard.propTypes = {
	country: React.PropTypes.object.isRequired
}