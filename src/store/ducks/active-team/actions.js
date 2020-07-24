import { teamTypes } from '../actions-types';

export function setActive(team) {
  return {
    type: teamTypes.SET_ACTIVE,
    payload: {
      activeTeam: team,
    },
  };
}
