import {Action, applyMiddleware, compose, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import rootReducer, {AppStateType} from "./reducers";

type InferType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsTypes<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<InferType<T>>;

export type BaseThunkType<A extends Action> = ThunkAction<Promise<void>, AppStateType, unknown, A>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;