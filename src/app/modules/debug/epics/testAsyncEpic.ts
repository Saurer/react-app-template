import { Epic } from 'modules/index';
import ofAction from 'modules/_operators/ofAction';
import { delay, map } from 'rxjs/operators';
import { testAsync } from '../actions';

const testAsyncEpic: Epic = (action$, store) => action$.pipe(
    ofAction(testAsync.started),
    delay(3000),
    map(action => testAsync.done({
        params: action.payload,
        result: {}
    }))
);

export default testAsyncEpic;