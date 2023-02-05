import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from '@redux-saga/core';

import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './modules/rootSaga';
import { RepositoriesState } from './modules/repositories/types';

export interface ReduxState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

export default store;