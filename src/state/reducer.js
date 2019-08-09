import * as Actions from './actions';

import appliancesData from '../config/appliances.yaml';

const initialState = {
    money: 1000,
    truck: {},
    appliances: []
};

function truckReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.BUY_EQUIPMENT: {
            if (action.appliance.cost > state.money) return state;
            else {

                let isPrereqOwned = true;
                const prereqs = action.appliance.prereq;
                if (prereqs.length > 0) {
                    let ownedAppIds = state.appliances.map(a => a.id);

                    // if this appliance has a prereq, check if the current list of appliances contains it
                    console.log('here');
                    prereqs.forEach(prereq => {
                        if (!ownedAppIds.includes(prereq))
                            isPrereqOwned = false;
                    });
                }

                const isOwned =
                    state.appliances.filter(a => a.id == action.appliance.id)
                        .length > 0;

                // TODO check current truck's number of slots
                // 

                return isOwned || !isPrereqOwned
                    ? state
                    : {
                          ...state,
                          money: state.money - action.appliance.cost,
                          appliances: [...state.appliances, action.appliance]
                      };
            }
        }

        case Actions.BUY_TRUCK: {
            if (action.truck.cost > state.money) return state;
            else {
                // let truck = action.truck;
                // let appliances = state.appliances;

                // if (truck.appliances && truck.appliances.length > 0) {
                //     truck.appliances.map(currentAppId => {
                //         // check for existing owned appliances
                //         let ownedAppIds = appliances.map(a => a.id);

                //         if (!ownedAppIds.includes(currentAppId)) {
                //             // get full appliance data from file
                //             let applianceObj = appliancesData.filter(
                //                 a => a.id == currentAppId
                //             )[0];

                //             appliances.push(applianceObj);
                //         }
                //     });
                // }

                return {
                    ...state,
                    money: state.money - action.truck.cost,
                    truck: action.truck
                    // appliances: appliances
                };
            }
        }

        // TODO maybe make a handler for a "day" of work

        default: {
            return state;
        }
    }
}

export default truckReducer;
