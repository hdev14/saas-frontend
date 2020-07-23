import produce from 'immer';

import { teamTypes } from '../actions-types';

const INITIAL_STATE = {
  active: null,
};

export default function activeTeam(state = INITIAL_STATE, action) {
  switch (action.type) {
    case teamTypes.SET_ACTIVE:
      return produce(state, (draftState) => {
        draftState.active = action.payload.team;
      });
    default:
      return state;
  }
}
