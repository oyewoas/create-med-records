import { createSelector } from "reselect";

const selectRecord = state => state.record;

export const selectCurrentUser = createSelector(
    [selectRecord],
    (record) => record.currentRecord 
)