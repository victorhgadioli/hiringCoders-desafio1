import React, { useState } from "react";
import {
  CartIconStyled,
  HeaderAppBar,
  IconButtonStyled,
  RefreshIconStyled,
  StoreIconStyled,
  TypographyStyled,
} from "./Header.style";
import { Toolbar } from "@material-ui/core";
import { IProductItem } from "../../utils/types";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [cartQty, setCartQty] = useState(0);

  const quantitizeCartList = () => {
    const cartListString = localStorage.getItem("cart-list");
    let quantity: number = 0;

    if (cartListString !== null) {
      const cartList: Array<IProductItem> = JSON.parse(cartListString);

      cartList.forEach((item: IProductItem) => {
        quantity += item.quantity;
      });
    }

    setCartQty(quantity);
  };

  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar>
        <Link replace to={"/store"}>
          <IconButtonStyled>
            <StoreIconStyled fontSize="large" />
          </IconButtonStyled>
        </Link>
        <IconButtonStyled>
          <Link replace to={"/store/cart"}>
            <CartIconStyled fontSize="large" />
          </Link>
        </IconButtonStyled>
        <TypographyStyled variant="h6">{cartQty}</TypographyStyled>
        <IconButtonStyled onClick={quantitizeCartList}>
          <RefreshIconStyled />
        </IconButtonStyled>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
