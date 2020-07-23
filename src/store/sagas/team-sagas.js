import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { getTeamsSuccess } from '../ducks/team/actions';

export function* getTeams() {
  try {
    const response = yield call(api.get, '/teams');
    yield put(getTeamsSuccess(response.data));
  } catch (err) {
    toast.warning('Algo errado não está certo');
  }
}

export function setActive({ payload }) {
  const { team } = payload;
  if (team) {
    api.defaults.headers.common['Team-Slug'] = team.active ? team.active.slug : team.slug;
  }
}
