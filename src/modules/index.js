import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';

import users, * as fromUsers from './users';

export const rootReducer = combineReducers({
  users,
});

export default connectRouter(history)(rootReducer);
