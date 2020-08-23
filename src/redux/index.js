import {combineReducers} from 'redux';
import userReducer from './userReducer/user.reducer';

export default combineReducers({
    user: userReducer
})