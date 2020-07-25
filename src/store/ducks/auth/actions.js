import { authTypes } from '../actions-types';

export function signInRequest({ email, password }) {
  return {
    type: authTypes.SIGN_IN_REQUEST,
    payload: {
      email, password,
    },
  };
}

export function signInSuccess(token) {
  return {
    type: authTypes.SIGN_IN_SUCCESS,
    payload: {
      token,
    },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: authTypes.SIGN_UP_REQUEST,
    payload: {
      name, email, password,
    },
  };
}

export function signOut() {
  return {
    type: authTypes.SIGN_OUT,
  };
}
