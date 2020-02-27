import { allRecordsActionTypes } from "./allrecords.types"


const INITIAL_STATE = {
    currentRecords: []
}

const filterMinorsInRecords = (records) => {
    console.log(records)
    const minors = records.filter(record => record.age < 18)
    return minors
    
}

const allRecordsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case allRecordsActionTypes.GET_ALL_RECORDS:
            return {
                ...state,
                currentRecords: action.payload.data.data
            }
        case allRecordsActionTypes.FILTER_MINORS_IN_RECORDS:
            return {
                ...state,
                currentRecords: filterMinorsInRecords(state.currentRecords)
            }
        default:
            return state
    }
}

export default allRecordsReducer