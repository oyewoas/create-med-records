import { historyActionTypes } from "./history.types"



export const getCurrentHistory = data => ({
    type: historyActionTypes.GET_COMPARISON_HISTORY,
    payload: data

})

