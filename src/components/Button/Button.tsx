import React, {FC} from 'react';
import style from "./Button.module.scss";
import classNames from "classnames";

type Props = {
    className?: string
    onClick?: () => void
    black?: boolean
    counter?: boolean
    close?: boolean
};

const Button: FC<Props> = ({children, className, onClick, black, counter,
                           close}) => {
    return (
        <button onClick={onClick ? onClick : undefined} className={
            classNames(style.button, {
                [style.outline]: className?.includes("button--outline"),
                [style.back]: className?.includes("button--back"),
                [style.black]: black,
                [style.counter]: counter,
                [style.close]: close,
        })}>
            {children}
        </button>
    );
};

export default Button;
