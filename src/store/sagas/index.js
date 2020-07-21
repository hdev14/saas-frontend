import { all, takeLatest } from 'redux-saga/effects';

import authTypes from '../ducks/auth/auth-types';
import { signIn, setToken } from './auth-sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(authTypes.SIGN_IN_REQUEST, signIn),
    takeLatest('persist/REHYDRATE', setToken),
  ]);
}
