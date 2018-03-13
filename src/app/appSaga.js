import {call, put, takeEvery, select} from 'redux-saga/effects'; 

import {types, actions} from './appReducer';


export default function* rootSaga() {
    yield takeEvery(types.TICK, gameLoop); 
};

function* gameLoop(action) {
    // this is where we simulate the people 
    yield put(actions.addMoney(1)); 
    const state = yield select(); 
    yield console.log(state.app.money); 
}


