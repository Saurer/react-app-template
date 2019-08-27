import { combineEpics } from 'redux-observable';
import debugEpic from './debug/epic';

export default combineEpics(debugEpic);
