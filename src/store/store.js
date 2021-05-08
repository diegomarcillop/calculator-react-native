import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default Store;