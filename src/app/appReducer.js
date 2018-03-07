export const types = {
    TICK: 'app/tick'
};

export const actions = {
    tick: () => ({type: types.TICK})
};

export const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
