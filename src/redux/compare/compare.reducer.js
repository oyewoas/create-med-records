import { comparisonActionTypes } from "./compare.types"


const INITIAL_STATE = {
    currentComparison: null
}

const comparisonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case comparisonActionTypes.COMPARE_SUBMISSIONS:
            return {
                ...state,
                currentComparison: action.payload.data
            }
        case comparisonActionTypes.GET_COMPARISON_DETAILS:
            return {
                ...state,
                currentComparison: action.payload.data.data
            }
        case comparisonActionTypes.RE_RUN_COMPARISON:
            return {
                ...state,
                currentComparison: action.payload.data
            }
        default:
            return state
    }
}

export default comparisonReducer