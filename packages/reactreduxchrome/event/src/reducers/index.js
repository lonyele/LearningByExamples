import {combineReducers} from 'redux';

import count from './count';
import initHydrate from './initHydrate';

export default combineReducers({
  count,
  initHydrate
});
