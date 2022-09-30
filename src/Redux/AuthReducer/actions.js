import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS
} from "./actionType";

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};

export const loginFailure = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};

export const loginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload
  };
};
