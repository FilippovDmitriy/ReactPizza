import React from 'react';
import style from "./Header.module.scss";
import {Logo} from "../Logo/Logo";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalCount, getTotalPrice} from "../../redux/selectors/cart";
import {getIsShowButtonToCart} from "../../redux/selectors/cart";

const Header = () => {
    const totalCount = useSelector(getTotalCount);
    const totalPrice = useSelector(getTotalPrice);
    const isShowButtonToCart = useSelector(getIsShowButtonToCart);

    return (
        <header className={style.header}>
            <NavLink to={"/"}>
                <Logo/>
            </NavLink>
            {isShowButtonToCart && <NavLink to={"/cart"}>
                <Button>
                    <div className={style.headerButton}>
                        <p>{totalPrice} ₽</p>
                        <div className={style.limiter}>

                        </div>
                        <div className={style.cartIcon}>
                            <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="21" fill="none" r="2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <circle cx="20" cy="21" fill="none" r="2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <path d="M5.67,6H23l-1.68,8.39a2,2,0,0,1-2,1.61H8.75a2,2,0,0,1-2-1.74L5.23,2.74A2,2,0,0,0,3.25,1H1" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </svg>
                        </div>
                        <p>{totalCount}</p>
                    </div>
                </Button>
            </NavLink>}
        </header>
    );
};

export default Header;
