import { recordActionTypes } from "./record.types"



export const setMedicalRecord = data => ({
    type: recordActionTypes.SET_CURRENT_RECORD,
    payload: data

})
