import { testAsync } from '../actions';
import { Reducer } from 'modules';
import { State } from '..';

const testAsyncDoneHandler: Reducer<typeof testAsync.started, State> = () => ({
    pending: false
});

export default testAsyncDoneHandler;