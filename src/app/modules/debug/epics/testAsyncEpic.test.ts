import { Subject } from 'rxjs';
import { StateObservable } from 'redux-observable';
import { TestScheduler } from 'rxjs/testing';
import { RootState } from 'modules/reducer';
import { testAsync } from '../actions';
import testAsyncEpic from './testAsyncEpic';

test('testAsyncEpic', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual.value).toEqual(expected.value);
    });

    testScheduler.run(({ hot, expectObservable }) => {
        const action$ = hot('-a', {
            a: testAsync.started({})
        });
        const state$: StateObservable<RootState> = new StateObservable(
            new Subject(),
            {
                debug: {
                    pending: false
                }
            }
        );

        const output$ = testAsyncEpic(action$, state$, {});

        expectObservable(output$).toBe('---a', {
            a: testAsync.done({
                params: {},
                result: {}
            })
        });
    });
});
