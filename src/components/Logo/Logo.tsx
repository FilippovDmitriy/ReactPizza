import React, {FC} from "react";
import style from './Logo.module.scss';
import logo from '../../assets/images/Logo/logo.png';

export const Logo: FC = () => {
    return <div className={style.logo}>
        <div className={style.image}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={style.text}>
            <div className={style.title}>REACT PIZZA</div>
            <div className={style.subtitle}>самая вкусная пицца во вселенной</div>
        </div>
    </div>
};