import { combineReducers } from 'redux';
import bgReducer from 'reducers/bgReducer';
import colorReducer from 'reducers/colorReducer';
import slideReducer from 'reducers/slideReducer';

export default combineReducers({
  activeState: colorReducer,
  bgState: bgReducer
});
