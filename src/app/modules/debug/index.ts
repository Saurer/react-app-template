import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { testAsync } from './actions';
import testAsyncHandler from './reducers/testAsyncHandler';
import testAsyncDoneHandler from './reducers/testAsyncDoneHandler';

export type State = {
    pending: boolean
};

const initialState: State = {
    pending: false
};

export default reducerWithInitialState(initialState)
    .case(testAsync.started, testAsyncHandler)
    .case(testAsync.done, testAsyncDoneHandler);