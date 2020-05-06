import  authReducer   from './auth';
import  dashboardReducer   from './dashboard';
import { combineReducers } from 'redux';

const rootReducer= combineReducers({dashboard:dashboardReducer,auth:authReducer});

export default rootReducer;