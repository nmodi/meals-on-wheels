import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import createSagaMiddleware from 'redux-saga'; 

import appReducer from './appReducer';
import appSaga from './appSaga';

const rootReducer = combineReducers({
    app: appReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(appSaga);

export default store; 


