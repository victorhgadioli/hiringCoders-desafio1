import React from "react";
import { PaperStyled } from "./StoreWindow.style";

const StoreWindow: React.FC = ({ children }) => {
  return <PaperStyled elevation={24}>{children}</PaperStyled>;
};

export default StoreWindow;
