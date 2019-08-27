import { Action } from 'typescript-fsa';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { RootState } from './reducer';
import rootEpic from './epic';

const composeEnhancers = composeWithDevTools({});

const configureStore = (initialState?: RootState) => {
    const epicMiddleware = createEpicMiddleware<
        Action<any>,
        Action<any>,
        RootState
    >();

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);

    return store;
};

export default configureStore;
