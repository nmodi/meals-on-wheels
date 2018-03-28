import raw from './data/ingredients';

export const types = {
    BUY_INGREDIENT: 'market/buy_ingredient',
    INCREMENT_INGREDIENT_COUNT: 'market/increment_ingredient',
    DECREMENT_INGREDIENT_COUNT: 'market/decrement_ingredient'
};

export const actions = {
    buyIngredient: (ingredient, quantity) => ({
        type: types.BUY_INGREDIENT,
        ingredient: ingredient,
        quantity: quantity
    }),
    incrementIngredientCount: (ingredient, quantity) => ({
        type: types.INCREMENT_INGREDIENT_COUNT,
        ingredient: ingredient,
        quantity: quantity
    })
};

export const initialState = {ingredients: [...raw]};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT_INGREDIENT_COUNT: {
            let newState = {...state};

            let prevQuantity;
            let index;

            state.ingredients.map((ingredient, i) => {
                if (action.ingredient.name === ingredient.name) {
                    prevQuantity = ingredient.quantity
                        ? ingredient.quantity
                        : 0;
                    index = i;
                    return;
                }
            });

            newState.ingredients[index].quantity =
                prevQuantity + action.quantity;

            console.log(newState);

            return newState;
        }

        case types.DECREMENT_INGREDIENT_COUNT: {
            let newState = {...state};

            let prevQuantity;
            let index;

            state.ingredients.map((ingredient, index) => {
                if (action.ingredient.name === ingredient.name) {
                    prevQuantity = ingredient.quantity
                        ? ingredient.quantity
                        : 0;
                    index = index;
                    return;
                }
            });

            newState.ingredients[index].quantity =
                prevQuantity - action.quantity;

            return newState;
        }

        default: {
            return state;
        }
    }
};
