import React, {FC} from 'react';
import style from "./Burger.module.scss"

type Props = {
    onClick?: () => void
}

const Burger: FC<Props> = ({onClick}) => {
    return (
        <div className={style.burger} onClick={onClick}>
            <span></span>
        </div>
    );
};

export default Burger;
