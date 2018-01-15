import { combineReducers } from 'redux';
import user from './user';
import homeworks from './homeworks';
import badges from './badges';

const rootReducer = combineReducers({
  user,
  homeworks,
  badges,
});

export default rootReducer;
