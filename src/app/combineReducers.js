import {combineReducers} from 'redux'; 

import gameReducer from '../game/gameReducer'; 
import marketReducer from '../market/marketReducer'; 

const rootReducer = combineReducers({
    game: gameReducer,
    market: marketReducer
});

export default rootReducer; 