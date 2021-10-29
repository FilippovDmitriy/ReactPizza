import {BaseThunkType, InferActionsTypes} from "../store";
import {ActiveSortBy, PizzaItems} from "../../types/types";
import {homeApi} from "../../api/homeApi";
import produce from "immer";

const GET_PIZZA_ITEMS = "reactPizza/pizzas/GET_PIZZA_ITEMS";
const SET_IS_LOADED = "reactPizza/pizzas/SET_IS_LOADED";

const initialState = {
    isLoaded: false,
    pizzaItems: [{
        id: 0,
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        name: "Пепперони Фреш с перцем",
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 803,
        category: 0,
        rating: 4
    }] as PizzaItems,
};

const pizzas = (state = initialState, action: ActionsTypes): InitialState => {
    return produce(state, draft => {
        switch (action.type) {
            case GET_PIZZA_ITEMS:
                draft.pizzaItems = action.payload.pizzaItems
                break
            case SET_IS_LOADED:
                draft.isLoaded = action.payload.status
                break
            default:
        }
    });
};

const actions = {
    getPizzaItems: (pizzaItems: PizzaItems) => ({type: GET_PIZZA_ITEMS, payload: {pizzaItems}} as const),
    setIsLoaded: (status: boolean) => ({type: SET_IS_LOADED, payload: {status}} as const),
};

export const getPizzaItems = (category: number | null, activeSortBy: ActiveSortBy): ThunkActionComplete => async (dispatch) => {
    dispatch(actions.setIsLoaded(false));
    let pizzaItems = await homeApi.getPizzaItems(category, activeSortBy);
    dispatch(actions.getPizzaItems(pizzaItems));
    dispatch(actions.setIsLoaded(true));
};

type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkActionComplete = BaseThunkType<ActionsTypes>;

export default pizzas;