import {AppStateType} from "../reducers";

export const getPizzaItemsSelector = (state: AppStateType) => {
    return state.pizzas.pizzaItems;
};

export const getIsLoaded = (state: AppStateType) => {
    return state.pizzas.isLoaded;
};