import axios from 'axios';

export const SET_COUNTRIES = "SET_COUNTRIES";

export function setCountries(countries) {
	return {
		type: SET_COUNTRIES,
		countries
	}
}

export function showCountries() {
	return dispatch => {
		return axios.get('api/browse/bycountry')

			.then(res =>  {
				console.log(res);
				dispatch(setCountries(res.data.Country))		
			});
	}
}

export const SET_GENRES = "SET_GENRES";

export function setGenres(genres) {
	return {
		type: SET_GENRES,
		genres
	}
}

export function showGenres() {
	return dispatch => {
		return axios.get('api/browse/bygenre')

			.then(res =>  {
				console.log(res);
				dispatch(setGenres(res.data.Genre))		
			});
	}
}