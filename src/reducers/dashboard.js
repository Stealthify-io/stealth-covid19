import {FETCH_DASHBOARD_LOADING,FETCH_TEXT_SUCCESS, FETCH_LOCATION_SUCCESS,FETCH_LOCATION_ERROR,FETCH_PLACES_SUCCESS, FETCH_PLACES_ERROR,FETCH_DISTANCE_SUCCESS,FETCH_DISTANCE_ERROR} from '../actions/types';
let initialState={
    loading:true,
    user:[],
    places:[],
    currentLocation:'',
    distance:'',
    text:'',
    error:null
}

export default function dashboardReducer(state = initialState, action){
    switch(action.type) {
        case FETCH_DASHBOARD_LOADING: 
            return {
                ...state,
            }
            case FETCH_TEXT_SUCCESS:
                return {
                    ...state,
                    text: action.text,
                    loading: false
                }    
                case FETCH_LOCATION_SUCCESS:
                    return {
                        ...state,
                        currentLocation: action.currentLocation,
                        loading: false
                    } 
                case FETCH_LOCATION_ERROR:
                    return {
                        ...state,
                        error: action.error,
                        loading: false
                    }      
        case FETCH_PLACES_SUCCESS:
            return {
                ...state,
                places: action.places,
                loading: false
            }
        case FETCH_PLACES_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
            case FETCH_DISTANCE_SUCCESS:
                return {
                    ...state,
                    distance: action.distance,
                    loading: false
                }
            case FETCH_DISTANCE_ERROR:
                return {
                    ...state,
                    error: action.error,
                    loading: false
                }
        default: 
            return state;
    }
}




