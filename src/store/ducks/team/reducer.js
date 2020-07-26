import produce from 'immer';

import { teamTypes } from '../actions-types';

const INITIAL_STATE = {
  data: [],
};

export default function team(state = INITIAL_STATE, action) {
  switch (action.type) {
    case teamTypes.GET_TEAMS_SUCCESS:
      return produce(state, (draftState) => {
        draftState.data = action.payload.data;
      });
    case teamTypes.CREATE_TEAM_SUCCESS:
      return produce(state, (draftState) => {
        draftState.data.push(action.payload.team);
      });
    default:
      return state;
  }
}
