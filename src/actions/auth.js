import axios from "axios";
import { apiUrl } from "../environments/environment";
import {authUserPending,signupUserSuccess, signupUserError,loginUserSuccess,loginUserError,logoutUserSuccess,isAuthSuccess} from "./types";


export function signupUser(signupdata){
   
    return(dispatch)=>{
        dispatch(authUserPending());
        const config = {
            method: "POST",
            url:apiUrl+"/user/signup/",
            data: signupdata,
            withCredentials: false,
            crossdomain: true,
            headers: { "Content-Type": "application/json" }
          };
        return axios(config).then((response)=>{
            dispatch(signupUserSuccess(response.message));
        }).catch(err =>
            dispatch(signupUserError(err))
          );
    }
}

export function loginUser(logindata){
    return(dispatch)=>{
        dispatch(authUserPending());
        const config = {
            method: "POST",
            url:apiUrl+"/user/login",
            data: logindata,
            withCredentials: true,
            crossdomain: true,
            headers: { "Content-Type": "application/json" }
          };

          return axios(config).then((response)=>{
             localStorage.setItem("token", response.data.token);
              localStorage.setItem('user',JSON.stringify(response.data.user));
            dispatch(loginUserSuccess(response.data.token,response.data.user));
        }).catch(err =>
           dispatch(loginUserError(err))
          );
    }
}

export function logoutUser(){
   
    return(dispatch)=>{
            dispatch(authUserPending());
            localStorage.removeItem("token");
            localStorage.removeItem('user');
            dispatch(logoutUserSuccess());
    }
}

export function isUserAuthenicated(){

    return(dispatch)=>{
        dispatch(authUserPending());
        if(localStorage.getItem('token') && localStorage.getItem('user'))
        dispatch(isAuthSuccess(localStorage.getItem('token'),JSON.parse(localStorage.getItem('user'))));
    }
}







