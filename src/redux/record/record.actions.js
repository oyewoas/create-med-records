import { userActionTypes } from "./record.types"



export const setMedicalRecord = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user

})

export const logOutCurrentUser = () => ({
    type: userActionTypes.LOG_OUT_CURRENT_USER,
})