import {createStore, applyMiddleware} from 'redux'; 
import createSagaMiddleware from 'redux-saga'; 

import truckReducer from './reducers/truckReducer'; 


const sagaMiddleware = createSagaMiddleware(); 

let store = createStore(
    truckReducer, 
    applyMiddleware(sagaMiddleware)
); 