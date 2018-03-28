import {call, put, takeEvery, select} from 'redux-saga/effects';

import {types, actions} from './marketReducer';

import {types as gameTypes, actions as gameActions} from '../game/gameReducer';

export default function* watcher() {
    yield takeEvery(types.BUY_INGREDIENT, purchaseIngredient);
}

function* purchaseIngredient(action) {
    let ingredient = action.ingredient;
    let quantity   = action.quantity;

    let total = ingredient.cost * quantity;
    yield put(gameActions.addMoney(total * -1));
    yield put(actions.incrementIngredientCount(ingredient, quantity));
}
