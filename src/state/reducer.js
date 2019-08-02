import * as Actions from './actions';

const initialState = {
    money: 1000,
    truck: {}
};

function truckReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.BUY_TRUCK: {
            return {
                ...state,
                money: state.money - action.truck.cost,
                truck: action.truck
            };
        }

        default: {
            return state;
        }
    }
}

export default truckReducer;
