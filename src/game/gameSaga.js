import {call, put, takeEvery, select} from 'redux-saga/effects'; 

import {types, actions} from './gameReducer';

export default function* rootSaga() {
    yield takeEvery(types.TICK, gameLoop); 
};

function* gameLoop(action) {
    // this is where we simulate the people 
    let profit = yield(Math.floor(Math.random() * 6) - 1);
    yield put(actions.addMoney(profit)); 
}


