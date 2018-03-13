import {fork} from 'redux-saga/effects';

import gameSaga from '../game/gameSaga';

function* rootSaga() {
    yield [fork(gameSaga)];
}

export default rootSaga;
