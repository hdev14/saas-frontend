import produce from 'immer';

import { authTypes } from '../actions-types';

const INITIAL_STATE = {
  signed: false,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authTypes.SIGN_IN_SUCCESS:
      return produce(state, (draftState) => {
        draftState.signed = true;
        draftState.token = action.payload.token;
      });
    case authTypes.SIGN_OUT:
      return produce(state, (draftState) => {
        draftState.signed = false;
        draftState.token = null;
      });
    default:
      return state;
  }
}
