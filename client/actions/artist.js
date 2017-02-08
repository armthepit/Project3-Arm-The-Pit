import axios from 'axios';

export const SET_ARTISTS = "SET_ARTISTS";

export function setArtists(artists) {
	return {
		type: SET_ARTISTS,
		artists
	}
}

export function showArtists() {
	return dispatch => {
		return axios.get('api/artist')

			.then(res =>  {
				console.log(res);
				dispatch(setArtists(res.data.Artist))		
			});
	}
}