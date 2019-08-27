import { combineReducers } from 'redux';
import debug, { State as DebugState } from './debug';

export type RootState = {
    debug: DebugState;
};

export default combineReducers<RootState>({
    debug
});
