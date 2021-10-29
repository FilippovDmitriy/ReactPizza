import React, {FC, useState} from 'react';
import style from "./PizzaForm.module.scss";
import Button from "../../../Button/Button";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../../redux/reducers/cart";
import {getPizzasCartItems} from "../../../../redux/selectors/cart";

type PropsType = {
    name: string
    imageUrl: string
    id: number
    price: number
    types: number[]
    sizes: number[]
};

const PizzaForm: FC<PropsType> = ({name, imageUrl, id, price, types, sizes}) => {
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    
    const typeItems = ["тонкое", "традиционное"];
    const sizeItems = [26, 30, 40];

    const dispatch = useDispatch();
    const addedToCartCount = useSelector(getPizzasCartItems)[id]?.length
    const onSelectType = (index: number) => {
        setActiveType(index)
    };
    const onSelectSize = (size: number) => {
        setActiveSize(size)
    };
    const handlerButtonClick = () => {
        const pizzaObj = {name, imageUrl, id, price, type: typeItems[activeType], size: activeSize};
        dispatch(actions.addPizzaToCart(pizzaObj));
    };

    return (
        <div className={style.pizzaForm}>
            <div className={style.menu}>
                <ul className={style.types}>
                    {typeItems.map((type, index) =>
                        <li key={type}
                            className={classNames({
                                [style.active]: index === activeType,
                                [style.disabled]: !types.includes(index)})}
                            onClick={() => types.includes(index) && onSelectType(index)}>{type}</li>)}
                </ul>
                <ul className={style.size}>
                    {sizeItems.map((size) =>
                        <li key={size}
                            className={classNames({
                                [style.active]: size === activeSize,
                                [style.disabled]: !sizes.includes(size)})}
                            onClick={() => sizes.includes(size) && onSelectSize(size)}>{size} см.</li>)}
                </ul>
            </div>
            <div className={style.bottom}>
                <div className={style.price}>от {price} ₽</div>
                <Button onClick={handlerButtonClick} className="button--outline">
                    <div className={style.button}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#fe5f1e"/>
                        </svg>
                        <span>Добавить</span>
                        {addedToCartCount && <i>{addedToCartCount}</i>}
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default PizzaForm;
