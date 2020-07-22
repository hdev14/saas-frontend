import { teamTypes } from '../actions-types';

export function getTeamsRequest() {
  return {
    type: teamTypes.GET_TEAMS_REQUEST,
  };
}

export function getTeamsSuccess(data) {
  return {
    type: teamTypes.GET_TEAMS_SUCCESS,
    payload: {
      data,
    },
  };
}

export function setActive(team) {
  return {
    type: teamTypes.SET_ACTIVE,
    payload: {
      team,
    },
  };
}
