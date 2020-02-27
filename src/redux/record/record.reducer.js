import { recordActionTypes } from "./record.types"


const INITIAL_STATE = {
    currentRecord: null
}

const medicalRecordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case recordActionTypes.SET_CURRENT_RECORD:
            return {
                ...state,
                currentRecord: action.payload.data
            }
        default:
            return state
    }
}

export default medicalRecordReducer