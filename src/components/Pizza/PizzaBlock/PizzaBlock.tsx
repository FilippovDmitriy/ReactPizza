import React, {FC} from 'react';
import style from "./PizzaBlock.module.scss";
import PizzaForm from "./PizzaForm/PizzaForm";
import {PizzaItem} from "../../../types/types";

type PropsType = {
    pizzaItem: PizzaItem
};

const PizzaBlock: FC<PropsType> = ({pizzaItem}) => {
    return (
        <div className={style.pizzaBlock}>
            <div className={style.image}>
                <img src={pizzaItem.imageUrl} alt="pizza"/>
            </div>
            <h3>{pizzaItem.name}</h3>
            <div className={style.form}>
                <PizzaForm name={pizzaItem.name} imageUrl={pizzaItem.imageUrl} id={pizzaItem.id}
                           price={pizzaItem.price} types={pizzaItem.types} sizes={pizzaItem.sizes}/>
            </div>
        </div>
    );
};

export default PizzaBlock;
