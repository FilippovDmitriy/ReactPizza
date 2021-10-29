import {instance} from "./api";
import {ActiveSortBy} from "../types/types";

export const homeApi = {
    async getPizzaItems (category: number | null, activeSortBy: ActiveSortBy) {
        let response = await instance.get(`pizzas/${category !== null ? `?category=${category}` : "?"}&_sort=${activeSortBy}&_order=${activeSortBy === "name" ? "asc" : "desc"}`);
        return response.data;
    },
};