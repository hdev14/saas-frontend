import { all, takeLatest } from 'redux-saga/effects';

import { authTypes, teamTypes } from '../ducks/actions-types';
import { signIn, setToken } from './auth-sagas';
import { getTeams, setActive, createTeam } from './team-sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(authTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(teamTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(teamTypes.SET_ACTIVE, setActive),
    takeLatest('persist/REHYDRATE', setActive),
    takeLatest(teamTypes.CREATE_TEAM_REQUEST, createTeam),
  ]);
}
