export type PizzaItems = PizzaItem[];
export type PizzaItem = {
    id: number
    imageUrl: string
    name: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
};
export type PizzaCartType = {
    id: number
    name: string
    imageUrl: string
    type: string
    size: number
    price: number
};
export type ActiveSortBy = "rating" | "name" | "price";