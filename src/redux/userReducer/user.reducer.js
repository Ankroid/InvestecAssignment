import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    userData: '',
    isEmulator: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case userActionTypes.CHECK_IS_EMULATOR:
            return {
                ...state,
                isEmulator: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;