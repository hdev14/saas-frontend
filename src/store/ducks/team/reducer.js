import produce from 'immer';

import { teamTypes } from '../actions-types';

const INITIAL_STATE = {
  data: [],
  active: null,
};

export default function team(state = INITIAL_STATE, action) {
  switch (action.type) {
    case teamTypes.GET_TEAMS_SUCCESS:
      return produce(state, (draftState) => {
        draftState.data = action.payload.data;
      });
    case teamTypes.SET_ACTIVE:
      return produce(state, (draftState) => {
        draftState.active = action.payload.team;
      });
    default:
      return state;
  }
}
