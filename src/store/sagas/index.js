import { all, takeLatest } from 'redux-saga/effects';

import { authTypes, teamTypes } from '../ducks/actions-types';
import {
  signIn, signUp, setToken, signOut,
} from './auth-sagas';
import {
  getTeams, setActive, createTeam, createProject, addRoles, inviteMember,
} from './team-sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(authTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(authTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(authTypes.SIGN_OUT, signOut),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('persist/REHYDRATE', setActive),
    takeLatest(teamTypes.SET_ACTIVE, setActive),
    takeLatest(teamTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(teamTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(teamTypes.CREATE_PROJECT, createProject),
    takeLatest(teamTypes.ADD_ROLES, addRoles),
    takeLatest(teamTypes.INVITE_MEMBER, inviteMember),
  ]);
}
