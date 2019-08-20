import { testAsync } from '../actions';
import { Reducer } from 'modules';
import { State } from '..';

const testAsyncHandler: Reducer<typeof testAsync.started, State> = () => ({
    pending: true
});

export default testAsyncHandler;