import axios from 'axios';

export const VIEW_ARTIST = "SHOW_ARTIST";

export function setArtist(artist) {
	return {
		type: VIEW_ARTIST,
		artist
	}
}

export function showArtist() {
	return dispatch => {
		return axios.get('api/artist/artistUrl')

			.then(res =>  {
				console.log(res);
				dispatch(setArtist(res.data.Artist))		
			});
	}
}