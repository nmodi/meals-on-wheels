import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import createSagaMiddleware from 'redux-saga'; 


import App from './App';
import appReducer from './app/appReducer';
import appSaga from './app/appSaga'; 

const sagaMiddleware = createSagaMiddleware(); 

const rootReducer = combineReducers(
    {
        app: appReducer
    }
); 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(appSaga); 


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
