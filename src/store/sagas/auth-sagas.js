import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { signInSuccess } from '../ducks/auth/actions';
import history from '../../services/history';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/sessions', payload);
    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token));
    history.push('/');
  } catch (err) {
    toast.error('Verifique seu e-mail ou senha');
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    const response = yield call(api.post, '/users', { name, email, password });
    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token));
    history.push('/');
  } catch (err) {
    toast.error('Você foi convidado?');
  }
}

export function setToken({ payload }) {
  if (payload.auth && payload.auth.token) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
  }
}

export function signOut() {
  history.push('/signin');
}
