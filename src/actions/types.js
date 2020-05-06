export const FETCH_DASHBOARD_LOADING = 'FETCH_DASHBOARD_LOADING';



export const FETCH_TEXT_SUCCESS = 'FETCH_TEXT_SUCCESS';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_ERROR = 'FETCH_PLACES_ERROR';
export const FETCH_DISTANCE_SUCCESS = 'FETCH_DISTANCE_SUCCESS';
export const FETCH_DISTANCE_ERROR = 'FETCH_DISTANCE_ERROR';


export const AUTH_USER_PENDING='AUTH_USER_PENDING';

export const SIGNUP_USER_SUCCESS='SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR='SIGNUP_USER_ERROR';
export const LOGIN_USER_SUCCESS='LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR='LOGIN_USER_ERROR';
export const LOGOUT_USER_SUCCESS='LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR='LOGOUT_USER_ERROR';

export const IS_AUTH_SUCCESS='IS_AUTH_SUCCESS';



export function fetchDashboardPending() {
    return {
        type: FETCH_DASHBOARD_LOADING
    }
}


export function fetchTextSuccess(text) {
    return {
        type: FETCH_TEXT_SUCCESS,
        text: text
    }
}

export function fetchLocationSuccess(currentLocation) {
    return {
        type: FETCH_LOCATION_SUCCESS,
        currentLocation: currentLocation
    }
}
export function fetchLocationError(error) {
    return {
        type: FETCH_LOCATION_ERROR,
        error:error
    }
}


export function fetchPlacesSuccess(places) {
    return {
        type: FETCH_PLACES_SUCCESS,
        places: places
    }
}

export function fetchPlacesError(error) {
    return {
        type: FETCH_PLACES_ERROR,
        error: error
    }
}



export function fetchDistanceSuccess(distance) {
    return {
        type: FETCH_DISTANCE_SUCCESS,
        distance: distance
    }
}

export function fetchDistanceError(error) {
    return {
        type: FETCH_DISTANCE_ERROR,
        error: error
    }
}





// Movie single //


//User //

export function authUserPending() {
    return {
        type: AUTH_USER_PENDING,
     
    }
}

export function signupUserSuccess(user) {
    return {
        type: SIGNUP_USER_SUCCESS,
        user: user
    }
}

export function signupUserError(error) {
    return {
        type: SIGNUP_USER_ERROR,
        error: error
    }
}


export function loginUserSuccess(token,user) {
    return {
        type: LOGIN_USER_SUCCESS,
        token: token,
        user:user
    }
}

export function loginUserError(error) {
    return {
        type: LOGIN_USER_ERROR,
        error: error
    }
}



export function logoutUserSuccess() {
    return {
        type: LOGOUT_USER_SUCCESS,
    }
}

export function logoutUserError(error) {
    return {
        type: LOGOUT_USER_ERROR,
        error: error
    }
}

export function isAuthSuccess(token,user){
    return {
        type: IS_AUTH_SUCCESS,
        token:token,
        user:user
    }
    
}




//User //