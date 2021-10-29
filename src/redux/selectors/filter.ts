import {AppStateType} from "../reducers";

export const getActiveCategory = (state: AppStateType) => {
    return state.filter.activeCategory;
};

export const getActiveSortBy = (state: AppStateType) => {
    return state.filter.activeSortBy;
};