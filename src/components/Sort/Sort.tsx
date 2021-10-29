import React, {FC, useEffect, useRef, useState} from 'react';
import style from "./Sort.module.scss";
import classNames from "classnames";
import {ActiveSortBy} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/reducers/filter";
import {getActiveSortBy} from "../../redux/selectors/filter";
import {handlerDocumentOutsideClick} from "../../functions/handlerDocumentOutsideClick";

type Props = {
    items: Array<{
        name: string
        type: ActiveSortBy
    }>
};

const Sort: FC<Props> = ({items}) => {
    const dispatch = useDispatch();
    const activeSortBy = useSelector(getActiveSortBy);
    const activeLabelName = items.find(item => item.type === activeSortBy)?.name;
    const [isVisible, setIsVisible] = useState(false);
    const linkRef = useRef<HTMLDivElement>(null);

    const toggleIsVisible = () => {
        setIsVisible(!isVisible);
    };
    const handlerOutsidePopupClick = (e: any) => {
        handlerDocumentOutsideClick(e, linkRef, setIsVisible, false);
    };
    const handlerSortItemClick = (type: ActiveSortBy) => {
        dispatch(actions.setActiveSortBy(type));
    };

    useEffect(() => {
        document.addEventListener("click", handlerOutsidePopupClick);
        return () => {
          document.removeEventListener("click", handlerOutsidePopupClick);
        };
    }, [])

    return (
        <div className={style.sort}>
            <div className={classNames(style.link, {[style.active]: isVisible})} ref={linkRef} onClick={toggleIsVisible}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
                </svg>
                <p>Сортировка по:</p>
                <span>{activeLabelName}</span>
            </div>
            {isVisible && <div className={style.main}>
                <ul>
                    {items.map((obj, index) => <li key={`${obj.type}_${index}`}
                                                    className={classNames({[style.active]: obj.type === activeSortBy})}
                                                    onClick={() => {handlerSortItemClick(obj.type)}}>{obj.name}</li>)}
                </ul>
            </div>}
        </div>
    );
};

export default Sort;
