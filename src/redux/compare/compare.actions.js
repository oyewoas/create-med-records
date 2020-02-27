import { comparisonActionTypes } from "./compare.types"



export const compareSubmissions = data => ({
    type: comparisonActionTypes.COMPARE_SUBMISSIONS,
    payload: data

})

export const getComparisonDetails = data => ({
    type: comparisonActionTypes.GET_COMPARISON_DETAILS,
    payload: data

})

export const reRunComparison = data => ({
    type: comparisonActionTypes.RE_RUN_COMPARISON,
    payload: data

})

