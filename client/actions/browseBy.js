import axios from 'axios';
 
export function browseByCountry() {
   return dispatch => {
     return axios.get(`/api/browseby/country/);
   }
 }

 export function browseByGenre() {
   return dispatch => {
     return axios.get(`/api/browseby/genre/);
   }
 }

 export function browseByName() {
   return dispatch => {
     return axios.get(`/api/browseby/name/);
   }
 }

export function browseByState() {
   return dispatch => {
     return axios.get(`/api/browseby/state/);
   }
 }