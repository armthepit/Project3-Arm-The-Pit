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

export const SET_NAMES = "SET_NAMES";

export function setNames(names) {
	return {
		type: SET_NAMES,
		names
	}
}

export function showNames() {
	return dispatch => {
		return axios.get('api/browse/byname')

			.then(res =>  {
				console.log(res);
				dispatch(setNames(res.data.Name))		
			});
	}
}

export const SET_STATES = "SET_STATES";

export function setStates(states) {
	return {
		type: SET_STATES,
		states
	}
}

export function showStates() {
	return dispatch => {
		return axios.get('api/browse/bystate')

			.then(res =>  {
				console.log(res);
				dispatch(setStates(res.data.Usa))		
			});
	}
}