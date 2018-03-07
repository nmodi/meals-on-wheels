import {call, put, takeLatest} from 'redux-saga/effects'; 

import {types} from './appReducer';

export default function* rootSaga() {
    yield takeLatest(types.TICK, tickSaga); 
};

function* tickSaga(action) {
    yield console.log('hello'); 
}


