import {combineReducers} from "redux";
import pizzas from "./pizzas";
import filter from "./filter";
import cart from "./cart";

const rootReducer = combineReducers({
    pizzas, filter, cart
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer;