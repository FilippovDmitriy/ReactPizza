import React, {useEffect} from 'react';
import style from "./Pizza.module.scss";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import {getPizzaItems} from "../../redux/reducers/pizzas";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoaded, getPizzaItemsSelector} from "../../redux/selectors/pizzas";
import {PizzaItem} from "../../types/types";
import PizzaLoadingBlock from "./PizzaBlock/PizzaLoadingBlock/PizzaLoadingBlock";
import {getActiveCategory, getActiveSortBy} from "../../redux/selectors/filter";

const Pizza = () => {
    const dispatch = useDispatch();

    const activeCategory = useSelector(getActiveCategory);
    const activeSortBy = useSelector(getActiveSortBy);
    const pizzaItems = useSelector(getPizzaItemsSelector);
    const isLoaded = useSelector(getIsLoaded);

    useEffect(() => {
        dispatch(getPizzaItems(activeCategory, activeSortBy));
    }, [dispatch, activeCategory, activeSortBy]);

    return (
        <div className={style.pizza}>
            <h2>Все пиццы</h2>
            <div className={style.main}>
                {isLoaded
                    ? pizzaItems.map((item: PizzaItem) => <PizzaBlock key={item.id} pizzaItem={item}/>)
                    : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)}
            </div>
        </div>
    );
};

export default Pizza;
