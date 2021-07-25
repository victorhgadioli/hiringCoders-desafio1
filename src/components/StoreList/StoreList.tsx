import React from "react";
import { StoreListStyled } from "./StoreList.style";
import ProductCard from "../ProductCard/ProductCard";

import { IProduct } from "../../utils/types";
const products: IProduct[] = require("../../data/products.json");

const StoreList: React.FC = () => {
  return (
    <StoreListStyled>
      {products.map(({ image, title, price }) => {
        return (
          <ProductCard
            image={image}
            title={title}
            price={price}
          />
        );
      })}
    </StoreListStyled>
  );
};

export default StoreList;
