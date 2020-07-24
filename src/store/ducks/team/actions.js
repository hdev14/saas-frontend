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

export function createTeamRequest(teamName) {
  return {
    type: teamTypes.CREATE_TEAM_REQUEST,
    payload: {
      name: teamName,
    },
  };
}

export function createTeamSuccess(team) {
  return {
    type: teamTypes.CREATE_TEAM_SUCCESS,
    payload: {
      team,
    },
  };
}

export function createProject(project) {
  return {
    type: teamTypes.CREATE_PROJECT,
    payload: {
      project,
    },
  };
}
