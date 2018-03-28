export const types = {
    TICK: 'app/tick',
    MONEY_ADD: 'app/add_money',
    DEMAND_ADD: 'app/increment_demand',
    TRUCK_TOGGLE: 'app/toggle_truck'
};

export const actions = {
    tick: () => ({type: types.TICK}),
    addMoney: (amount = 1) => ({type: types.MONEY_ADD, amount: amount}),
    addDemand: (amount = 1) => ({type: types.DEMAND_ADD, amount: amount}),
    toggleTruck: () => ({type: types.TRUCK_TOGGLE})
};

export const initialState = {
    isTruckActive: true,
    money: 1000,
    rawDemand: 0
};

export const selectors = {
    isTruckActive: state => state.game.isTruckActive, 
    getMoneyCount: state => state.game.money, 
    getRawDemand: state => state.game.rawDemand
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.TRUCK_TOGGLE: {
            return {...state, isTruckActive: !state.isTruckActive}; 
        }

        case types.MONEY_ADD: {
            return {...state, money: state.money + action.amount};
        }

        case types.DEMAND_ADD: {
            return {...state, rawDemand: state.rawDemand + action.amount}; 
        }

        default: {
            return state;
        }
    }
};
