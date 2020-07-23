import { combineReducers } from 'redux';

import auth from './auth/reducer';
import team from './team/reducer';
import activeTeam from './active-team/reducer';

export default combineReducers({ auth, team, activeTeam });
