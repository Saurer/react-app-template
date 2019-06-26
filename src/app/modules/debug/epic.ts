import { combineEpics } from 'redux-observable';
import testAsyncEpic from './epics/testAsyncEpic';

export default combineEpics(
    testAsyncEpic
);