import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { signInSuccess } from '../ducks/auth/actions';
import history from '../../services/history';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/sessions', payload);
    localStorage.setItem('@JWT:token', response.data.token);
    yield put(signInSuccess(response.data.token));
    history.push('/');
  } catch (err) {
    toast.error('Verifique seu e-mail ou senha');
  }
}

export function* setToken({ payload }) {
  console.log(payload);
  const { token } = payload.auth;
  if (token) {
    yield put(signInSuccess(token));
  }
}
