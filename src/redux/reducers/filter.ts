import {InferActionsTypes} from "../store";
import {ActiveSortBy} from "../../types/types";
import produce from "immer";

const SET_ACTIVE_CATEGORY = "reactPizza/filter/SET_ACTIVE_CATEGORY";
const SET_ACTIVE_SORT_BY = "reactPizza/filter/SET_ACTIVE_SORT_BY";

const initialState = {
    activeCategory: null as number | null,
    activeSortBy: "rating" as ActiveSortBy
};

const filter = (state = initialState, action: ActionsTypes): InitialState => {
    return produce(state, draft => {
        switch (action.type) {
            case SET_ACTIVE_CATEGORY:
                draft.activeCategory = action.payload.activeCategory
                break
            case SET_ACTIVE_SORT_BY:
                draft.activeSortBy = action.payload.activeSortBy
                break
            default:
        }
    });
};

export const actions = {
    setActiveCategory: (activeCategory: number | null) => ({type: SET_ACTIVE_CATEGORY, payload: {activeCategory}} as const),
    setActiveSortBy: (activeSortBy: ActiveSortBy) => ({type: SET_ACTIVE_SORT_BY, payload: {activeSortBy}} as const),
};
type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

export default filter;