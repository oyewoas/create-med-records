import { userActionTypes } from "./record.types"


const INITIAL_STATE = {
    currentRecord: null
}

const medicalRecordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentRecord: action.payload.data
            }
        case userActionTypes.LOG_OUT_CURRENT_USER:
            return {...state, 
                currentRecord: null 
            }
        default:
            return state
    }
}

export default medicalRecordReducer