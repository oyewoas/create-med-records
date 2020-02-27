import { createSelector } from "reselect";

const selectAllRecords = state => state.allrecords;

export const selectCurrentRecords = createSelector(
    [selectAllRecords],
    (allrecords) => allrecords.currentRecords 
)