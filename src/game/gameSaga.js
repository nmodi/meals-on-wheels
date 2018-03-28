import {call, put, takeEvery, select} from 'redux-saga/effects';

import {types, actions, selectors} from './gameReducer';

import {dayOfSales} from './gameUtils';

export default function* rootSaga() {
    yield takeEvery(types.TICK, gameLoop);
}

function* gameLoop(action) {
    // this is where we simulate the people

    const isTruckDeployed = yield select(selectors.isTruckActive);

    if (isTruckDeployed) {
        let profit = yield dayOfSales();
        yield put(actions.addMoney(profit));
        yield put(actions.addDemand(profit - 1)); // AKA good reviews
    } else {
        
        yield put(actions.addMoney(-2)); // AKA maintenance costs
        yield put(actions.addDemand(-2)); // decay 
    }

}
