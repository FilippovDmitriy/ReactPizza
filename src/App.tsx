import React, {FC} from 'react';
import style from './App.module.scss';
import "./scss/variables.scss"
import './scss/reset.scss';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import {Route, Switch } from 'react-router-dom';
import Cart from "./pages/Cart/Cart";

const App: FC = () => {
  return (
      <div className={style.container}>
          <div className={style.wrapper}>
              <Header/>
              <main>
                  <Switch>
                      <Route path={"/"} exact render={() => <Home/>}/>
                      <Route path={"/cart"} render={() => <Cart/>}/>
                  </Switch>
              </main>
          </div>
      </div>
  );
};

export default App;
