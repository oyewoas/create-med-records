import { createSelector } from "reselect";

const selectRecord = state => state.record;

export const selectCurrentRecord = createSelector(
    [selectRecord],
    (record) => record.currentRecord 
)