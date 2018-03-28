import {fork} from 'redux-saga/effects';

import gameSaga from '../game/gameSaga';
import marketSaga from '../market/marketSaga';

function* rootSaga() {
    yield [fork(gameSaga), fork(marketSaga)];
}

export default rootSaga;
