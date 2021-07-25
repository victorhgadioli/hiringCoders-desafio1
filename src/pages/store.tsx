import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Background from "../components/Background/Background";
import CartList from "../components/CartList/CartList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import StoreList from "../components/StoreList/StoreList";
import StoreWindow from "../components/StoreWindow/StoreWindow";

const Store: React.FC = () => {
  return (
    <Background>
      <StoreWindow>
        <Header />
        <Route exact path={"/store"}>
          <StoreList />
        </Route>
        <Route exact path={"/store/cart"}>
          <CartList />
        </Route>
        <Footer />
      </StoreWindow>
    </Background>
  );
};

export default Store;
