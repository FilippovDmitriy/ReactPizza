import {AppStateType} from "../reducers";

export const getPizzasCartItems = (state: AppStateType) => {
    return state.cart.items;
};

export const getTotalCount = (state: AppStateType) => {
    return state.cart.totalCount;
};

export const getTotalPrice = (state: AppStateType) => {
    return state.cart.totalPrice;
};

export const getIsShowButtonToCart = (state: AppStateType) => {
    return state.cart.isShowButtonToCart;
};