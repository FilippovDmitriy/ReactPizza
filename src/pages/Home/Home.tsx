import React from 'react';
import style from "./Home.module.scss";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";

const Home = () => {
    return (
        <>
            <div className={style.topContent}>
                <Categories titles={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}/>
                <Sort items={[
                    {name: "популярности", type: "rating"},
                    {name: "по цене", type: "price"},
                    {name: "по алфавиту", type: "name"}
                    ]}/>
            </div>
            <Pizza/>
        </>
    );
};

export default Home;
