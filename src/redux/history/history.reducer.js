import { historyActionTypes } from "./history.types"


const INITIAL_STATE = {
    currentHistory: []
}

const historyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case historyActionTypes.GET_COMPARISON_HISTORY:
            return {
                ...state,
                currentHistory: action.payload.data.data
            }
        default:
            return state
    }
}

export default historyReducer