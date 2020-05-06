import axios from "axios";
import { apiUrl } from "../environments/environment";
import {fetchDashboardPending,fetchTextSuccess,fetchLocationSuccess,fetchLocationError,
     fetchPlacesSuccess, fetchPlacesError,fetchDistanceSuccess,fetchDistanceError} from "./types";


export function userWelcomeText(){

    return(dispatch)=>{
        dispatch(fetchDashboardPending());
        var today = new Date()
        var curHr = today.getHours()
        var text="";
        if (curHr < 12) {
            text='good morning';
        } else if (curHr < 18) {
            text='good afternoon';
        } else {
            text='good evening';
        }
        dispatch(fetchTextSuccess(text));
    }

}

export function getPlaces(latitude,longitude){
    return(dispatch)=>{
        dispatch(fetchDashboardPending());
        var bodyFormData = new FormData();
        bodyFormData.set('lat', latitude);
        bodyFormData.set('lng', longitude);
        console.log(bodyFormData)
          const config = {
            method: "POST",
            url:apiUrl+"/places",
            data: bodyFormData,
            crossdomain: true,
            withCredentials: true,
            headers: { "Content-Type": 'multipart/form-data'}
          };
          return axios(config).then((response)=>{
             dispatch(fetchPlacesSuccess(response.data.results));
        }).catch(err =>
            dispatch(fetchPlacesError(err))
          );
        }
}


export function getDistance(latitude,longitude){
    return(dispatch)=>{
        dispatch(fetchDashboardPending());
        var bodyFormData = new FormData();
        bodyFormData.set('lat', latitude);
        bodyFormData.set('lng', longitude);
        console.log(bodyFormData)
          const config = {
            method: "POST",
            url:apiUrl+"/distance",
            data: bodyFormData,
            crossdomain: true,
            withCredentials: true,
            headers: { "Content-Type": 'multipart/form-data'}
          };
          return axios(config).then((response)=>{
             dispatch(fetchDistanceSuccess(response.data.distance));
        }).catch(err =>
            dispatch(fetchDistanceError(err))
          );
        }
}


export function userLocation(latitude,longitude){
    return(dispatch)=>{
        dispatch(fetchDashboardPending());
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyASUgxNOHFzT1QVWeL-2YVAu4kYTxnaTco`).then(response => response.json()).then((data)=>{
        var location = data.results[Object.keys(data.results).length-2].formatted_address;
            dispatch(fetchLocationSuccess(location));
        }).catch(err =>
            dispatch(fetchLocationError(err))
          );

}








}