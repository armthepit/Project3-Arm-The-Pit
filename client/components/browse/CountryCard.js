import React from 'react';

export default function CountryCard({ country }) {
	return (
		<div className="col-md-4">
			<div className="content">
				{country.title}
			</div>
		</div>
	);
}

CountryCard.propTypes = {
	country: React.PropTypes.object.isRequired
}