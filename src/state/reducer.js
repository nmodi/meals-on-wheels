import * as Actions from './actions';

import applianceConfig from '../config/equipment.yaml';

const initialState = {
    money: 1000,
    truck: {},
    equipment: []
};

function truckReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.BUY_EQUIPMENT: {
            if (action.equipment.cost > state.money) {
                return state;
            } else {
                // check for prereqs
                // this could get complex....
                // also check for duplicates

                return {
                    ...state,
                    money: state.money - action.equipment.cost,
                    equipment: [...state.equipment, action.equipment]
                };
            }
        }

        case Actions.BUY_TRUCK: {
            if (action.truck.cost > state.money) {
                return state;
            } else {
                let truck = action.truck;
                let appliances = state.equipment;
                if (truck.appliances && truck.appliances.length > 0) {
                    
                    truck.appliances.map(applianceId => {
                        // TODO check for duplicates 
                        appliances.push(applianceConfig[applianceId]);
                    });

                }

                return {
                    ...state,
                    money: state.money - action.truck.cost,
                    truck: action.truck,
                    equipment: appliances
                };
            }
        }

        default: {
            return state;
        }
    }
}

export default truckReducer;
