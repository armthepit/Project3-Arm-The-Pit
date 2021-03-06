import React from 'react';
import { Link } from 'react-router';

export default function CountryCard({ country }) {
	return (
		<div className="col-sm-12 col-md-3">
			<div className="panel panel-default">
				<div className="panel-body text-center">
					<Link to={`country/${country.countryUrl}`}>
						<img src="assets/images/lilgirl.jpg" className="img-responsive center-block" alt="{country.title}" />				
					</Link>	
				</div>
				<div className="panel-footer text-center">
					<Link to={`'country'/${country.countryUrl}`}><button type="button" className="btn btn-custom btn-block">{country.title} - <span className="badge">{country.numberArtists}</span></button></Link>
				</div>			
			</div>
		</div>
	);
}

CountryCard.propTypes = {
	country: React.PropTypes.object.isRequired
}