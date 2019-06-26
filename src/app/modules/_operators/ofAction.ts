import { Action, isType, ActionCreator } from 'typescript-fsa';
import { Observable, MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

const ofAction = <TAction>(actionCreator: ActionCreator<TAction>) =>
    (predicate: Observable<Action<any>>) => predicate.pipe(
        filter(action => isType(action, actionCreator)) as MonoTypeOperatorFunction<Action<TAction>>
    );

export default ofAction;