import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { signInSuccess } from '../ducks/auth/actions';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, '/sessions', payload);
    localStorage.setItem('@JWT:token', response.data.token);
    yield put(signInSuccess(response.data.token));
  } catch (err) {
    toast.error('Verifique seu e-mail ou senha');
  }
}
