import { userActionTypes } from './user.types';

export const setUserData = data => ({
  type: userActionTypes.USER_DATA,
  payload: data
})

export const checkIsEmulator = data => ({
  type: userActionTypes.CHECK_IS_EMULATOR,
  payload: data
})



