import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import {
  CardStyled,
  CardActionsStyled,
  CardMediaStyled,
  CardContentStyled,
  ProductTitle,
  PriceStyled,
} from "./ProductCard.style";
import InfoIcon from "@material-ui/icons/Info";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { IProduct, IProductItem } from "../../utils/types";

const ProductCard: React.FC<IProduct> = ({
  image = "",
  title = "",
  price = 0,
}) => {
  const [quantity, setQuantity] = useState(0);

  const saveToCart = () => {
    const cartListString = localStorage.getItem("cart-list");

    if (cartListString !== null) {
      const cartList: Array<IProductItem> = JSON.parse(cartListString);
      let foundItem = false;

      const newCartList: Array<IProductItem> = cartList.map(
        (item: IProductItem) => {
          if (item.title === title) {
            foundItem = true;
            item = {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        }
      );

      if (foundItem) {
        localStorage.setItem("cart-list", JSON.stringify(newCartList));
      } else {
        const item: IProductItem = {
          title: title,
          price: price,
          quantity: quantity,
        };
        const newCartList =
          "[" +
          cartListString.substring(1, cartListString.length - 1) +
          "," +
          JSON.stringify(item) +
          "]";
        localStorage.setItem("cart-list", newCartList);
      }
    } else {
      const newList = {
        title: title,
        price: price,
        quantity: quantity,
      };
      localStorage.setItem("cart-list", "[" + JSON.stringify(newList) + "]");
    }
    setQuantity(0);
  };

  return (
    <CardStyled>
      <CardContentStyled>
        <CardMediaStyled image={image} />
        <ProductTitle>{title}</ProductTitle>
        <PriceStyled>
          R$
          {(quantity === 0 ? price : quantity * price)
            .toFixed(2)
            .replace(".", ",")}
        </PriceStyled>
      </CardContentStyled>
      <CardActionsStyled>
        <IconButton>
          <InfoIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            quantity && setQuantity(quantity - 1);
          }}
        >
          <RemoveIcon />
        </IconButton>
        <h2>{quantity}</h2>
        <IconButton
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => saveToCart()}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActionsStyled>
    </CardStyled>
  );
};

export default ProductCard;
