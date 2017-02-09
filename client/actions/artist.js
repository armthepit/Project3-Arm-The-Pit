import axios from 'axios';

export const SET_ARTIST = "SET_ARTIST";

export function setArtist(artist) {
	return {
		type: SET_ARTIST,
		artist
	}
}

export function showArtist() {
	return dispatch => {
		return axios.get('api/artist/')

			.then(res =>  {
				console.log(res);
				dispatch(setArtist(res.data.Artist))		
			});
	}
}