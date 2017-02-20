import axios from 'axios';

export const BROWSE_ARTISTS = "SET_ARTISTS";

export function setArtists(artists) {
	return {
		type: BROWSE_ARTISTS,
		artists
	}
}

export function showArtists() {
	return dispatch => {
		return axios.get('api/browse/byartist/${browseId}/${searchId}')

			.then(res =>  {
				console.log(res);
				dispatch(setArtists(res.data.Artist))		
			});
	}
}

export const BROWSE_COUNTRIES = "BROWSE_COUNTRIES";

export function setCountries(countries) {
	return {
		type: BROWSE_COUNTRIES,
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

export const BROWSE_GENRES = "SET_GENRES";

export function setGenres(genres) {
	return {
		type: BROWSE_GENRES,
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

export const BROWSE_NAMES = "SET_NAMES";

export function setNames(names) {
	return {
		type: BROWSE_NAMES,
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

export const BROWSE_STATES = "SET_STATES";

export function setStates(states) {
	return {
		type: BROWSE_STATES,
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