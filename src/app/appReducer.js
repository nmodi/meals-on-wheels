export const types = {
    TICK: 'app/tick',
    ADD_MONEY: 'app/add_money'
}

export const actions = {
    tick: () => ({type: types.TICK}),
    addMoney: (amount) => ({type: types.ADD_MONEY, amount: amount})
};

export const initialState = {
    money: 1000
};

export default (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_MONEY: {
            return {...state, money: state.money + action.amount}; 
        }

        default: {
            return state;
        }
    }
};
