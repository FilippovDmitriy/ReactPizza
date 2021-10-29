import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import style from "./Categories.module.scss";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getActiveCategory} from "../../redux/selectors/filter";
import {actions} from "../../redux/reducers/filter";
import Burger from "../Burger/Burger";
import {handlerDocumentOutsideClick} from "../../functions/handlerDocumentOutsideClick";

type Props = {
    titles: string[]
};

const Categories: FC<Props> = React.memo(function ({titles}) {
    const [isBurger, setIsBurger] = useState(false);
    const [isVisibleMenu, setIsVisibleMenu] = useState(true);
    const activeCategory = useSelector(getActiveCategory);
    const burgerRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const selectItem = useCallback((index: number | null) => {
        dispatch(actions.setActiveCategory(index));
    }, []);

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 1366) {
            setIsBurger(true);
            setIsVisibleMenu(false);
        } else {
            setIsBurger(false);
            setIsVisibleMenu(true);
        }
    }, []);
    const handleClickBurger = () => {
        setIsVisibleMenu(!isVisibleMenu);
    };
    const handlerOutsidePopupClick = (e: any) => {
        handlerDocumentOutsideClick(e, burgerRef, setIsVisibleMenu, false);
    };
    const handleClickMenuItem = (index: number | null) => {
        selectItem(index);
        setIsVisibleMenu(false);
    };

    useEffect(() => {
        handleResize();
        document.addEventListener("click", handlerOutsidePopupClick);
        window.addEventListener("resize", handleResize);
        return () => {
            document.removeEventListener("click", handlerOutsidePopupClick);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return (
        <div ref={burgerRef} className={style.categories}>
            {isBurger && <Burger onClick={handleClickBurger}/>}
            <ul className={classNames({[style.active]: isVisibleMenu})}>
                <li className={classNames({[style.active]: activeCategory === null})}
                    onClick={() => handleClickMenuItem(null)}>Все
                </li>
                {titles.map((title, index) => <li key={title + index}
                                                  className={classNames({[style.active]: index === activeCategory})}
                                                  onClick={() => handleClickMenuItem(index)}>{title}</li>)}
            </ul>
        </div>
    );
});

export default Categories;
