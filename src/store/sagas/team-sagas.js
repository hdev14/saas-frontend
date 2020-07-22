import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { getTeamsSuccess } from '../ducks/team/actions';

export function* getTeams() {
  try {
    const response = yield call(api.get, '/teams');
    yield put(getTeamsSuccess(response.data));
  } catch (err) {
    toast.error('Algo errado não está certo');
  }
}
