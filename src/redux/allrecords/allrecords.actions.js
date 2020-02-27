import { allRecordsActionTypes } from "./allrecords.types"



export const getCurrentRecords = data => ({
    type: allRecordsActionTypes.GET_ALL_RECORDS,
    payload: data

})

export const filterMinorsInRecords = () => ({
    type: allRecordsActionTypes.FILTER_MINORS_IN_RECORDS,
})

