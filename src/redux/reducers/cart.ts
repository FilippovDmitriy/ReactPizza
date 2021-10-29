import {InferActionsTypes} from "../store";
import {PizzaCartType} from "../../types/types";
import produce from "immer";

const ADD_PIZZA_TO_CART = "reactPizza/cart/ADD_PIZZA_TO_CART";
const REMOVE_CART_ITEMS = "reactPizza/cart/REMOVE_CART_ITEMS";
const PLUS_ITEM_CART = "reactPizza/cart/PLUS_ITEM_CART";
const MINUS_ITEM_CART = "reactPizza/cart/MINUS_ITEM_CART";
const CLEAR_CART = "reactPizza/cart/CLEAR_CART";
const IS_SHOW_BUTTON_TO_CART = "reactPizza/cart/IS_SHOW_BUTTON_TO_CART";

const initialState = {
    items: {} as ItemsType,
    totalCount: 0 as number,
    totalPrice: 0 as number,
    isShowButtonToCart: true as boolean,
};

const cart = (state = initialState, action: ActionsTypes): InitialState => {
    return produce(state, draft => {
        switch (action.type) {
            case ADD_PIZZA_TO_CART: {
                const id = action.payload.pizzaObj.id;
                if (!draft.items[id]) {
                    draft.items[id] = [action.payload.pizzaObj];
                } else {
                    draft.items[id] = [...draft.items[id], action.payload.pizzaObj];
                }
                // @ts-ignore
                const arrayOfItems = [].concat([], ...Object.values(draft.items))
                draft.totalCount = arrayOfItems.length
                draft.totalPrice = arrayOfItems.reduce((sum: number, obj: PizzaCartType) => sum + obj.price, 0)
                break
            }
            case REMOVE_CART_ITEMS:
                const removedItem = draft.items[action.payload.id]
                const newTotalCount = draft.totalCount - removedItem.length;
                const newTotalPrice = draft.totalPrice - (removedItem[0].price * removedItem.length);

                delete draft.items[action.payload.id];
                draft.totalCount = newTotalCount;
                draft.totalPrice = newTotalPrice;
                break;
            case PLUS_ITEM_CART: {
                const id = action.payload.id;
                draft.items[id] = [...draft.items[id], draft.items[id][0]]
                // @ts-ignore
                const arrayOfItems = [].concat([], ...Object.values(draft.items))
                draft.totalCount = arrayOfItems.length
                draft.totalPrice = arrayOfItems.reduce((sum: number, obj: PizzaCartType) => sum + obj.price, 0)
                break;
            }
            case MINUS_ITEM_CART: {
                const id = action.payload.id;
                if (draft.items[id].length > 1) {
                    draft.items[id] = [...draft.items[id].slice(0, -1)];
                }
                // @ts-ignore
                const arrayOfItems = [].concat([], ...Object.values(draft.items))
                draft.totalCount = arrayOfItems.length
                draft.totalPrice = arrayOfItems.reduce((sum: number, obj: PizzaCartType) => sum + obj.price, 0)
                break;
            }
            case IS_SHOW_BUTTON_TO_CART:
                draft.isShowButtonToCart = action.payload;
                break
            case CLEAR_CART:
                draft.items = {};
                draft.totalCount = 0;
                draft.totalPrice = 0;
                break
            default:
        }
    });
};

export const actions = {
    addPizzaToCart: (pizzaObj: PizzaCartType) => ({type: ADD_PIZZA_TO_CART, payload: {pizzaObj}} as const),
    removeCartItems: (id: number) => ({type: REMOVE_CART_ITEMS, payload: {id}} as const),
    plusItemCart: (id: number) => ({type: PLUS_ITEM_CART, payload: {id}} as const),
    minusItemCart: (id: number) => ({type: MINUS_ITEM_CART, payload: {id}} as const),
    setIsShowButtonToCart: (isShowButtonToCart: boolean) => ({type: IS_SHOW_BUTTON_TO_CART, payload: isShowButtonToCart} as const),
    clearCart: () => ({type: CLEAR_CART} as const),
};

type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ItemsType = { [id: number]: PizzaCartType[] };

export default cart;