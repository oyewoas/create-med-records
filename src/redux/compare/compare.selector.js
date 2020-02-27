import { createSelector } from "reselect";

const selectComparison = state => state.comparison;

export const selectCurrentComparison = createSelector(
    [selectComparison],
    (comparison) => comparison.currentComparison 
)