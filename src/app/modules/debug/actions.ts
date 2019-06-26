import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('DEBUG');

export const testAsync = actionCreator.async<{}, {}>('TEST_ASYNC');