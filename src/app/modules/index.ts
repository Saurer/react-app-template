import { Action as ReduxAction } from 'redux';
import { StateObservable } from 'redux-observable';
import { Action, ActionCreator, Failure, Success } from 'typescript-fsa';
import { RootState } from './reducer';
import { Observable } from 'rxjs';

export type Epic<TInput extends Action<any> = any, TOutput extends TInput = TInput> =
    (action$: Observable<ReduxAction>, state$: StateObservable<RootState>, dependencies: {}) => Observable<TOutput>;

export type Reducer<TAction, TState> =
    TAction extends ActionCreator<Failure<infer P, infer E>> ? (state: TState, payload: Failure<P, E>) => TState :
    TAction extends ActionCreator<Success<infer P2, infer R>> ? (state: TState, payload: Success<P2, R>) => TState :
    TAction extends ActionCreator<infer R2> ? (state: TState, payload: R2) => TState :
    (state: TState, payload: TAction) => TState;