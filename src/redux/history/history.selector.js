import { createSelector } from "reselect";

const selectHistory = state => state.history;

export const selectCurrentHistory = createSelector(
    [selectHistory],
    (history) => history.currentHistory 
)